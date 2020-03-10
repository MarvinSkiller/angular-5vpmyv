import { Input,Output, Component, OnInit, ViewChild } from '@angular/core';
import { MemberService } from '../../sevices/member.service';
import { Member } from '../../model/member.model';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  // displayedColumns = ['အသင်းဝင်အမှတ်','ၸိုဝ်ႈ/အမည်', 'ၸိဝၼၼ်းၵိူတ်ႇ/မွေးသက္ကရာဇ်', 'ဢႃႇယူႉ/အသက်', 'တီႈၵိူတ်ႇ/မွေးရပ်ဇာတိ', 'ၽႃႇသႃႇၵိူဝ်းယမ်/ကိုးကွယ်သည့်ဘာသာ', 'မၢႆၽၢင်/မှတ်ပုံတင်အမှတ်', 'ၸၼ်ႉပၢႆးပိင်ႇၺႃႇ/ပညာအရည်အချင်း', 'ၵၢၼ်ငၢၼ်း/အလုပ်အကိုင်', 'ၸိုဝ်ႈပေႃႈမႄႈ/မိဘအမည်', 'ၸိၢႆၾူၼ်း/တယ်လီဖုန်းနံပါတ်', 'တီႈယူႇ/လိပ်စာအပြည့်အစုံ'];
  displayedColumns = ['အသင်းဝင်အမှတ်','ၸိုဝ်ႈ/အမည်', 'ၸိၢႆၾူၼ်း/တယ်လီဖုန်းနံပါတ်', 'Detail'];
  dataSource: MatTableDataSource<Member>;

  members: Member[];

  constructor(
    public memberService : MemberService,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}

  ngOnInit() { 
    this.memberService.getAllMember().subscribe(data => {
      this.members = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Member;
      })
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.members);
    });
  }

  @ViewChild(MatSort) sort: MatSort;
  @Output() memberParam: string;

  viewPayment(member: Member){
    this.memberParam = member.id;
    this.router.navigate(['view/paymentHistory', member]);
  }

}