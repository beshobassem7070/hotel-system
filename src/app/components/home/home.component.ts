import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, Validators} from '@angular/forms';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Feedback } from 'src/app/interface/feedback';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbRatingConfig]

})
export class HomeComponent implements OnInit  {
  // slide image
  img1 = '../../assets/7433.jpg';
  img2 = '../../assets/3192.jpg';
  img3 = '../../assets/555745-PKDZR7-938.jpg';
  img4 = '../../assets/11071.jpg';
  img5 = '../../assets/12375.jpg';
  img6 = '../../assets/2019-12-05.png';
  // wedding amage
  weddingImg = '../../assets/catering-ideas-beach-wedding-dubai-450x250.jpg';
  highRoom = '../../assets/athena-beach-hotel-junior.jpg';
  classRoom = '../../assets/10836.jpg';
  birthday = '../../assets/25649860-group-of-adorable-kids-having-fun-at-birthday-party.jpg';
  rest = '../../assets/190710135245-12-waterfront-restaurants.jpg';
  pool = '../../assets/B01U7270-ivv-activity-d-d-.jpg';


  currentRate = 0;
  feeds: Feedback[] = [];
  constructor(private cs: CartService) {

   }
   feedback(feed: string) {
     const data = {
      feedback: feed
     };
     this.cs.addToFeed(data);
   }

  ngOnInit() {
  }

}
