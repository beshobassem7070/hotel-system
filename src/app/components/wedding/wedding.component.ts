import { Component, OnInit } from '@angular/core';
import { Wedding } from 'src/app/interface/wedding';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit {
  img1 =  '../../assets/18_4.png';
  constructor(private cs: CartService) { }

  ngOnInit() {
  }
  reservation(form) {
    console.log(form);
  }
  combook(name: string , date: Date , time: string , numberr: string) {
    const data = {
      name1: name,
      date1 : date,
      time1 : time,
      number1 : numberr
    };
    this.cs.addToCart4(data);
  }
}
