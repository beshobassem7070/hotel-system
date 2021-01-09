import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { CartService } from 'src/app/services/cart.service';
import { Book } from 'src/app/interface/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-first-room',
  templateUrl: './book-first-room.component.html',
  styleUrls: ['./book-first-room.component.css']
})
export class BookFirstRoomComponent implements OnInit {
  // books: Book[] = [];
  // tslint:disable-next-line: no-inferrable-types
  // add: number = -1;
  constructor() { }

  /*book( tt: string, young: number, child: number) {
    const resev = this.books[this.add];
    const data = {
      tt: resev.tt,
      young: resev.young,
      child: resev.child
    };
    this.bs.reservation(data).then(dd => console.log(dd)).catch(err => console.log(err));
    }
*/
reservation(form) {
  console.log(form);
}
/*reservation(form) {
  const data: Book = form.value;
  this.bs.reservation(data.tt , data.young , data.child)
  // tslint:disable-next-line: no-shadowed-variable
  .then(data => console.log(data))
  .catch(err => console.log(err));
}*/
  ngOnInit() {
  }

}
