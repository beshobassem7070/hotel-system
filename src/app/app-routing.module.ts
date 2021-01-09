import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookFirstRoomComponent } from './components/book-first-room/book-first-room.component';
import { BookComponent } from './components/book/book.component';
import { SecondRoomComponent } from './components/second-room/second-room.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CartComponent } from './components/cart/cart.component';
import { MapComponent } from './components/map/map.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { WeddingComponent } from './components/wedding/wedding.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './services/guards/auth.guard';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';


const routes: Routes = [
  {path: '' , component: HomeComponent , data: {index: 0}},
  {path: 'book' , component: BookComponent , data: {index: 1}},
  {path: 'bookHighRoom' , component: BookFirstRoomComponent , data: {index: 2}},
  {path: 'bookClassRoom' , component: SecondRoomComponent , data: {index: 3}},
  {path: 'cart' , component: CartComponent , canActivate: [AuthGuard] , data: {index: 4}},
  {path: 'logIn' , component: LogInComponent , data: {index: 5}},
  {path: 'logOut' , component: LogOutComponent , data: {index: 6}},
  {path: 'signIn' , component: SignInComponent , data: {index: 7}},
  {path: 'map' , component: MapComponent , data: {index: 8}},
  {path: 'birthday' , component: BirthdayComponent},
  {path: 'feedback' , component: FeedbackComponent , data: {index: 9}},
  {path: 'wedding' , component: WeddingComponent},
  {path: 'admin' , component: AdminComponent , canActivate: [AuthGuard] },
  {path: 'adminhome2020' , component: AdminHomeComponent},
  {path: '**' , component: NotFoundComponent , data: {index: 10}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
