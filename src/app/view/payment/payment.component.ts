import {Input, Component, OnInit } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { Member } from '../../model/member.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() memberParam: Member;

  constructor() { }

  ngOnInit() {
    console.log(this.memberParam)
  }

}