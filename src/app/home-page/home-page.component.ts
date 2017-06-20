import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [ AuthService ]
})

export class HomePageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  user = firebase.auth().currentUser.displayName;

  ngOnInit() {
  }
  showUser(){
    console.log(firebase.auth().currentUser.displayName)
    console.log(this.user)
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }


}
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//   } else {
//     // No user is signed in.
//   }
// });
