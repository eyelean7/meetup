import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router) { }
  loginGoogle(){
    this.authService.loginWithGoogle()
    // if (this.authService.userDisplayName != null){
    // this.router.navigate(['home']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['']);
    console.log('logged out')
  }
}
