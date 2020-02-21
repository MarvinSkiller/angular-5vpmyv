import { Input,Output, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MemberService } from '../../sevices/member.service';
import { Member } from '../../model/member.model';
import {MatSnackBar} from '@angular/material';
import { MessageComponent } from '../message/message.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {

  members: Member[];

  memberForm:  FormGroup = new FormGroup({
    memberId: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    fatherName: new FormControl('',[Validators.required])
  });

  constructor(
    public memberService : MemberService,
    public snackBar: MatSnackBar,
    public router: Router
  ) { 
    this.memberService.getAllMember().subscribe(data => {
      this.members = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Member;
      })
    });
  }

  ngOnInit() {
  }
  submit() {
    if (this.memberForm.valid) {
      this.memberService.getMemberById(this.memberForm.value.memberId).subscribe(data => {
        if(!data.exists){
          this.memberService.createNewMember(this.memberForm.value).then(function(){
            this.openMessage('Successfully Added.', '');
          }).catch(function(error){
            this.openMessage('Error ' + error, '');
          });
        }else {
          this.openMessage(this.memberForm.value.memberId + 'Already register', '');
        }
      });
    }
  }

  openMessage(message: string, panelClass: string) {
    this.snackBar.openFromComponent(MessageComponent, {
      data: message,
      panelClass: panelClass,
      duration: 10000
    });
  }

  @Output() memberParam: Member;

  viewPayment(member: Member){
    console.log(member)
    this.memberParam = member;
    this.router.navigate(['view/paymentHistory']);
  }
  
  @Input() error: string | null;
}