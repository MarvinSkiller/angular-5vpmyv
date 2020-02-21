import {Input, Component, OnInit } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { Member } from '../../model/member.model';;
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() memberParam: Member;

  constructor(public router: Router,public activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activeRouter.params.subscribe((member : Member) => {
      this.memberParam = member;
    });
  }

}