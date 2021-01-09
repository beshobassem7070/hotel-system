import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
  img1 = '../../assets/5013.png';
  constructor(private cs: CartService) { }
  combook(name: string, date: Date , numberr: number , size: string) {
    const data3 = {
      name1: name,
      dated2: date,
      // tslint:disable-next-line: object-literal-shorthand
      number1: +numberr,
      size1: size
    };
    this.cs.addToCart3(data3);
  }

  reservation(form) {
    console.log(form);
  }


  ngOnInit() {
  }

}
