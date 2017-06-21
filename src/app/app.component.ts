import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appUser;
  lat: number = 47.6062;
  lng: number = 122.3321;
  constructor(public authService: AuthService, private router: Router) { }
  loginGoogle(){
    this.authService.loginWithGoogle();
    this.signInUser();
    // if (this.authService.userDisplayName != null){
    // this.router.navigate(['home']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  signInUser() {
    this.authService.user.subscribe(dataLastEmittedFromObserver => {
      this.appUser = dataLastEmittedFromObserver;
      console.log(this.appUser.displayName);
    });
  }
}
