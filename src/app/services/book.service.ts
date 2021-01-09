import { Injectable } from "@angular/core";
import { Book } from "../interface/book";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class BookService {
  constructor(private fs: AngularFirestore, private as: AuthService) {}
  reservation(data: Book) {
    return this.fs.collection(`users/${this.as.userId}/book`).add(data);
  }
  // reservation( type: string , young: number , child: number ) {
  //   return this.fs.doc(`users/${this.as.userId}/book`). ({

  //     type,
  //     young,
  //     child
  //   });

  // }
}
