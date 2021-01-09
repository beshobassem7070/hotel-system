import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { User } from '../interface/user';
import { Book } from '../interface/book';
import { Book2 } from '../interface/book2';
import { Birthday } from '../interface/birthday';
import { Wedding } from '../interface/wedding';
import { AngularFireList } from '@angular/fire/database';
import { Feedback } from '../interface/feedback';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  bookRef: AngularFireList<Book> = null;

  constructor( private fs: AngularFirestore , private as: AuthService) { }

  addToCart(data: Book) {
    return this.fs.collection(`users/${this.as.userId}/cart`).add(data);
  }
  addToCart2(data: Book2) {
    return this.fs.collection(`users/${this.as.userId}/classBook`).add(data);

  }
  addToCart3(data: Birthday) {
    return this.fs.collection(`users/${this.as.userId}/cart2`).add(data);
  }

  addToCart4(data: Wedding) {
    return this.fs.collection(`users/${this.as.userId}/cart4`).add(data);
  }

  addToFeed(data: Feedback) {
    return this.fs.collection(`users/${this.as.userId}/feedback`).add(data);
  }
  getCart() {
    return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges();

  }
  getTest() {
    return this.fs.collection(`cart`).snapshotChanges();

  }


  getCart2() {
    return this.fs.collection(`users/${this.as.userId}/cart2`).snapshotChanges();

  }
  getCart3() {
    return this.fs.collection(`users/${this.as.userId}/classBook`).snapshotChanges();

  }
  getCart4() {
    return this.fs.collection(`users/${this.as.userId}/cart4`).snapshotChanges();

  }
  getFeed() {
    return this.fs.collection(`users/${this.as.userId}/feedback`).snapshotChanges();
  }
  cancel(id) {
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).delete();
  }
  cancel2(id) {
    return this.fs.doc(`users/${this.as.userId}/cart2/${id}`).delete();
  }
  cancel3(id) {
    return this.fs.doc(`users/${this.as.userId}/cart4/${id}`).delete();
  }
  cancel4(id) {
    return this.fs.doc(`users/${this.as.userId}/classBook/${id}`).delete();
  }


}
