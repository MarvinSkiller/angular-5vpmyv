import { Input, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MemberService } from '../../sevices/member.service';
import { Member } from '../../model/member.model'


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
    public memberService : MemberService
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
            console.log('Successfully Added');
          }).catch(function(error){
            console.log('Error ' + error);
          });
        }
      });
    }
  }
  
  @Input() error: string | null;
}