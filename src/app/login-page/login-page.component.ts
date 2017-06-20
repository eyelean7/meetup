import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service'
import { Meetup } from '../meetup.model';
import { MeetupService } from '../meetup.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [MeetupService, AuthService]
})
export class LoginPageComponent implements OnInit {
  meetups: FirebaseListObservable<any[]>;
  currentUser;
  currentUserKey;
  allMeetups;
  meetupsForUser;

  constructor(public authService: AuthService, private router: Router, public meetupService: MeetupService) { }

  ngOnInit() {
    console.log(this.authService.userDisplayName);
    this.authService.user.subscribe(dataLastEmittedFromObserver => {
      this.currentUser = dataLastEmittedFromObserver;
      this.currentUserKey = this.currentUser.uid;
      this.meetupService.getMeetups().subscribe(dataLastEmittedFromObserver => {
        this.allMeetups = dataLastEmittedFromObserver;
        this.meetupsForUser = this.meetupService.getMeetupsForUser(this.currentUserKey, this.allMeetups);
        console.log(this.currentUserKey);
      });
    })


  }


  // loginGoogle(){
  //   this.authService.loginWithGoogle()
  //   // if (this.authService.userDisplayName != null){
  //   // this.router.navigate(['home']);
  // }

}


// .then((result) => {
//   this.router.navigate(['']);
