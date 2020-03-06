import { Input,Output, Component, OnInit } from '@angular/core';
import { MemberService } from '../../sevices/member.service';
import { Member } from '../../model/member.model';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];

  constructor(
    public memberService : MemberService,
    public snackBar: MatSnackBar,
    public router: Router
  ) { }

  ngOnInit() { 
    this.memberService.getAllMember().subscribe(data => {
      this.members = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Member;
      })
    });
  }

  @Output() memberParam: Member;

  viewPayment(member: Member){
    console.log(member);
    this.memberParam = member;
    this.router.navigate(['view/paymentHistory', member]);
  }

}