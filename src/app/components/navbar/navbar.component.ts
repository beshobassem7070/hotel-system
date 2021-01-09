import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  src = '../../assets/nn.png';

  // tslint:disable-next-line: no-inferrable-types
  isUser: boolean = false;
  constructor(private as: AuthService , private route: Router) { }

  logOut() {
    this.as.logOut().then(
      result => {
        this.route.navigate(['/logIn']);
      }
    );
  }
  ngOnInit() {
    this.as.user.subscribe(user => {
      if (user) {this.isUser = true;
      // tslint:disable-next-line: align
      this.as.userId = user.uid; }
      // tslint:disable-next-line: one-line
      else { this.isUser = false;
      // tslint:disable-next-line: align
      this.as.userId = ''; }
    });
  }

}
