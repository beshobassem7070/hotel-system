import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/book';
import { Birthday } from 'src/app/interface/birthday';
import { Wedding } from 'src/app/interface/wedding';
import { AdminService } from 'src/app/services/admin.service';
import { CartService } from 'src/app/services/cart.service';
import { Book2 } from 'src/app/interface/book2';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  books: Book[] = [];
  books2: Book2[] = [];
  birth: Birthday[] = [];
  wedd: Wedding[] = [];
  // tslint:disable-next-line: no-inferrable-types
  p: number = 1;
  // tslint:disable-next-line: no-inferrable-types
  p2: number = 1;
  // tslint:disable-next-line: no-inferrable-types
  p3: number = 1;
  // tslint:disable-next-line: no-inferrable-types
  p4: number = 1;
  users: any;
  constructor(private as: AdminService , private cs: CartService) { }
  cancel(index) {
    this.cs.cancel(this.books[index].id);
  }
  cancel2(index) {
    this.cs.cancel2(this.birth[index].id);
  }
  cancel3(index) {
    this.cs.cancel3(this.wedd[index].id);
  }


  ngOnInit() {
    this.cs.getTest().subscribe(books => {
      this.books = books.map(res => {
        return {
          id: res.payload.doc.id,
          ...res.payload.doc.data()
        };
      });
      console.log(this.books);
    });

    this.cs.getCart3().subscribe(cart2 => {
      this.books2 = cart2.map(res2 => {
        return {
          id: res2.payload.doc.id,
          ...res2.payload.doc.data()
        };
      });
    } );

    this.cs.getCart2().subscribe(birth => {
      this.birth = birth.map(ress => {
        return {
          id: ress.payload.doc.id,
          ...ress.payload.doc.data()
        };
      });
    });
    this.cs.getCart4().subscribe(wedd => {
       this.wedd = wedd.map(resss => {
         return {
        id: resss.payload.doc.id,
        ...resss.payload.doc.data()
         };
      });
    });
  }




}
