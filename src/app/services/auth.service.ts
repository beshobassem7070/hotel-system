import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  // tslint:disable-next-line: no-inferrable-types
  userId: string = '';

  constructor(private afauth: AngularFireAuth) {
    this.user = afauth.user;
  }
  signIn(email , password) {
    return this.afauth.auth.createUserWithEmailAndPassword(email, password);
  }
  /*signGoogle() {
    this.afauth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }*/
  logIn(email, password) {
    return this.afauth.auth.signInWithEmailAndPassword(email , password);
  }
  logOut() {
    return this.afauth.auth.signOut();
  }
}
