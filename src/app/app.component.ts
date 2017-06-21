import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appUser: string;
  lat: number = 47.61;
   lng: number = -122.33;
  constructor(public authService: AuthService, private router: Router) { }
  loginGoogle() {
    this.authService.loginWithGoogle();


  }
  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
