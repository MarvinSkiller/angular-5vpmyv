import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: Observable<firebase.User>;

  constructor(
    private router: Router,
    public angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }

  /* Sign up */
  /* SignUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are Successfully signed up!', res.user);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });    
  } */

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.router.navigate(['view/home']);
      })
      .catch(err => {
        this.router.navigate(['login']);
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.angularFireAuth.authState !== null;
  }

}