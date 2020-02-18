import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  memberCollection = this.firestore.collection('member-info');

  constructor(private firestore: AngularFirestore) { }

  getAllMember(){
    return this.firestore.collection('member-info').snapshotChanges();
  }

  createNewMember(memberData: any){
    return this.memberCollection.doc(memberData.memberId).set({});
  }

  getMemberById(memberId: string){
    return this.memberCollection.doc(memberId).get();
  }

}