import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { Book } from 'src/app/interface/book';
import { CartService } from 'src/app/services/cart.service';
import { BookService } from 'src/app/services/book.service';
import { Subscription } from 'rxjs';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, Validators} from '@angular/forms';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { BookFirstRoomComponent } from '../book-first-room/book-first-room.component';
import { AuthService } from 'src/app/services/auth.service';
import { Book2 } from 'src/app/interface/book2';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  img1 = '../../assets/7433.jpg';
  img2 = '../../assets/3192.jpg';
  img3 = '../../assets/555745-PKDZR7-938.jpg';
  img4 = '../../assets/11071.jpg';
  img5 = '../../assets/12375.jpg';
  img6 = '../../assets/2019-12-05.png';
  // tslint:disable-next-line: no-inferrable-types
  add: number = 1;
  books: Book[] = [];
  books2: Book2[] = [];
  bokksObserv: Subscription;
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  currentRate = 0;
  constructor(private route: Router , private cs: CartService , private bs: BookService, calendar: NgbCalendar , private as: AuthService ) {

    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

  }

  goClassBook() {
    this.route.navigate(['/bookClassRoom']);
  }
  /*bussRoom(i: number) {
   // this.route.navigate(['/bookHighRoom']);
   this.add = +i;
  }*/

  combook(name: string , date1: Date, date2: number, type: string, young: number, child: number , room: string) {
    if (!(this.as.userId)) {
      this.route.navigate(['/logIn']);
    }
    // tslint:disable-next-line: one-line
    else {
    const reserv = this.books[this.add];
    const data = {
      date1d: date1,
      dated2: +date2,
      // tslint:disable-next-line: object-literal-shorthand
      type: type,
      young: +young,
      child: +child,
      room1: room,
      name1: name
    };
    this.cs.addToCart(data)
    .then();
  }
  }
  combook2(name: string , date1: Date, date2: number, type: string, young: number, child: number , room: string) {
    if (!(this.as.userId)) {
      this.route.navigate(['/logIn']);
    }
    // tslint:disable-next-line: one-line
    else {
    const reserv2 = this.books2[this.add];
    const data2 = {
      name1: name,
      date1d: date1,
      dated2: +date2,
      // tslint:disable-next-line: object-literal-shorthand
      type: type,
      young: +young,
      child: +child,
      room1: room
    };
    this.cs.addToCart2(data2)
    .then();
  }
  }

  reservation(form) {
    console.log(form);

  }
  reservation2(form) {
    console.log(form);

  }


   onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }


  ngOnInit() {
  }

}
