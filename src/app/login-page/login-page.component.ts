import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service'



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log(this.authService.userDisplayName);
  }


  loginGoogle(){
    this.authService.loginWithGoogle()
    // if (this.authService.userDisplayName != null){
    // this.router.navigate(['home']);
  }

}


// .then((result) => {
//   this.router.navigate(['']);
