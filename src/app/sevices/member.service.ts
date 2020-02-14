import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private firestore: AngularFirestore) { }

  getAllMember(){
    return this.firestore.collection('member-info').snapshotChanges();
  }

  createNewMember(memberData: any){
    return this.firestore.collection('member-info').add(memberData);
  }

}