import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Feedback } from 'src/app/interface/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feed: Feedback[] = [];

  constructor(private cs: CartService) { }

  ngOnInit() {
    this.cs.getFeed().subscribe(feed => {
      this.feed = feed.map(res => {
        return {
          id: res.payload.doc.id,
          ...res.payload.doc.data()
        };
      });
      console.log(this.feed);
    });

  }

}
