import {Input, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageComponent } from '../message/message.component';
import { Member } from '../../model/member.model';;
import { Router, ActivatedRoute } from '@angular/router';
import { Payment } from '../../payment.model'

import { PaymentService } from '../../sevices/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() memberParam: Member;

  paymentHistory: Payment[];

  paymentForm: FormGroup = new FormGroup({
    amount: new FormControl('',[Validators.required]),
    endDate: new FormControl('',[Validators.required]),
    paymentDate: new FormControl('', [Validators.required])
  });

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public paymentService: PaymentService) { }

  ngOnInit() {
    this.activeRouter.params.subscribe((member : Member) => {
      this.memberParam = member;
      this.paymentService.getPaymentHistoryById(this.memberParam.memberId).subscribe(data => {
        this.paymentHistory = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Payment;
        })
      })
    });
  }

  submit(){
    console.log(this.paymentForm.value)
  }

}