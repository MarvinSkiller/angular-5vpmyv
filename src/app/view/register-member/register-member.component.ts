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

  memberForm:  FormGroup = new FormGroup({
    memberId: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    age: new FormControl('',[Validators.required]),
    placeOfBirth: new FormControl('',[Validators.required]),
    religion: new FormControl('',[Validators.required]),
    nrcNo: new FormControl('',[Validators.required]),
    education: new FormControl('',[Validators.required]),
    occupation: new FormControl('',[Validators.required]),
    parentName: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    phoneNo: new FormControl('',[Validators.required])
  });

  constructor(
    public memberService : MemberService,
    public snackBar: MatSnackBar,
    public router: Router
  ) {
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
            console.log(error)
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
  
  @Input() error: string | null;
}