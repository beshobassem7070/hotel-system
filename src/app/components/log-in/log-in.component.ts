import { Component, OnInit, HostBinding } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { AngularFireModule } from "@angular/fire";
import { analytics } from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"],
})
export class LogInComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  errorMassage: string = "";
  // tslint:disable-next-line: max-line-length
  img1 = "../../assets/cc.png";
  // tslint:disable-next-line: max-line-length
  constructor(
    private as: AuthService,
    private route: Router,
    public af: AngularFireModule,
    public authService: AuthService,
    public afAuth: AngularFireAuth
  ) {}

  lognIn(form) {
    const data = form.value;
    this.as
      .logIn(data.email, data.password)
      .then((result) => {
        this.route.navigate(["/"]);
      })
      .catch((err) => {
        this.errorMassage = err.message;
      });
  }
  ngOnInit() {}
}
