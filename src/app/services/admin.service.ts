import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private fs: AngularFirestore , private as: AuthService) { }
  getAdmin() {
    return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges();
  }
}
