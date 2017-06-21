import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appUser;
  loggedIn;
  lat: number = 47.61;
   lng: number = -122.33;
  constructor(public authService: AuthService, private router: Router) { }

    ngOnInit () {
      if ( this.authService.user) {
        this.loggedIn = true;
      }
    }

    loginGoogle(){
    this.authService.loginWithGoogle();
    this.signInUser();

  }
  logout() {
    this.authService.logout();
    this.loggedIn = false;
    location.reload();
  }

  signInUser() {
    this.authService.user.subscribe(dataLastEmittedFromObserver => {
      this.appUser = dataLastEmittedFromObserver;
      // location.reload();
      this.loggedIn = true;
    });

  }
}
