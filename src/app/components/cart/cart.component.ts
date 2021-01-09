import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from 'src/app/interface/book';
import { Birthday } from 'src/app/interface/birthday';
import { Wedding } from 'src/app/interface/wedding';
import { Book2 } from 'src/app/interface/book2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Book[] = [];
  cart2: Book2[] = [];
  birth: Birthday[] = [];
  wedd: Wedding[] = [];
  constructor(private cs: CartService ) { }
  cancel(index) {
    this.cs.cancel(this.cart[index].id);
  }
  cancel2(index) {
    this.cs.cancel2(this.birth[index].id);
  }
  cancel3(index) {
    this.cs.cancel3(this.wedd[index].id);
  }
  cancel4(index) {
    this.cs.cancel4(this.cart2[index].id);
  }

  ngOnInit() {
    this.cs.getCart().subscribe(cart => {
      this.cart = cart.map(res => {
        return {
          id: res.payload.doc.id,
          ...res.payload.doc.data()
        };
      });
      console.log(this.cart);
    });
    this.cs.getCart3().subscribe(cart2 => {
      this.cart2 = cart2.map(res2 => {
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
      console.log(this.birth);
    });
    this.cs.getCart4().subscribe(wedd => {
      this.wedd = wedd.map(resss => {
        return {
          id: resss.payload.doc.id,
          ...resss.payload.doc.data()
        };
      });
      console.log(this.wedd);
    });
  }

}
