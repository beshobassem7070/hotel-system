import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/interface/user";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"],
})
export class SignInComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  errorMassage: string = "";
  img1 = "../../assets/vv.png";
  constructor(
    private as: AuthService,
    private us: UserService,
    private route: Router
  ) {}

  signIn(form) {
    const data: User = form.value;
    this.as
      .signIn(data.email, data.password)
      // tslint:disable-next-line: no-shadowed-variable
      .then((result) => {
        this.errorMassage = "";
        // tslint:disable-next-line: align
        this.us
          .addNewUser(
            result.user.uid,
            data.name,
            data.phone,
            data.email,
            data.password,
            data.city
          )
          .then((result) => {
            this.route.navigate(["/"]);
          });
      })
      // tslint:disable-next-line: semicolon
      .catch((err) => {
        this.errorMassage = err.message;
      });
  }

  ngOnInit() {}
}
