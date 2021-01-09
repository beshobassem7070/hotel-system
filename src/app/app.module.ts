import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/Forms';
import {HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { NgxPaginationModule} from 'ngx-pagination';




import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule , FirestoreSettingsToken} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {AngularFireDatabaseModule} from '@angular/fire/database';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookFirstRoomComponent } from './components/book-first-room/book-first-room.component';
import { SecondRoomComponent } from './components/second-room/second-room.component';
import { BookComponent } from './components/book/book.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CartComponent } from './components/cart/cart.component';
import { from } from 'rxjs';
import { MapComponent } from './components/map/map.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { WeddingComponent } from './components/wedding/wedding.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BookFirstRoomComponent,
    SecondRoomComponent,
    BookComponent,
    NotFoundComponent,
    FeedbackComponent,
    LogInComponent,
    LogOutComponent,
    SignInComponent,
    CartComponent,
    MapComponent,
    BirthdayComponent,
    WeddingComponent,
    AdminComponent,
    AdminHomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDONHODDOO1z8E_4QAWF5HT4pSbjDaiG2c',
      authDomain: 'mysystemhotel.firebaseapp.com',
      databaseURL: 'https://mysystemhotel.firebaseio.com',
      projectId: 'mysystemhotel',
      storageBucket: 'mysystemhotel.appspot.com',
      messagingSenderId: '798294699321',
      appId: '1:798294699321:web:41e70f3fdf87a245510ce8',
      measurementId: 'G-NXR9E8NWVF'
    }),
    AngularFirestoreModule ,
    AngularFireAuthModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVkj-Jk23rwdVAco1KjXXzxeeq6xMN1aA'
    }),
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
