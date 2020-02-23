import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  memberCollection = this.firestore.collection('member-info');

  constructor(private firestore: AngularFirestore) { }

  getPaymentHistoryById(memberId: string){
    return this.memberCollection.doc(memberId).collection('paymentHistory').snapshotChanges();
  }

}