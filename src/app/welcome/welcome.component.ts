import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { Meetup } from '../meetup.model';
import { MeetupService } from '../meetup.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [MeetupService, AuthService]
})
export class WelcomeComponent implements OnInit {
  meetups: FirebaseListObservable<any[]>;
  currentUser;
  currentUserKey = null;
  allMeetups;
  meetupsForUser;
  currentUserEmail;
  currentUserName;

  constructor(public authService: AuthService, private router: Router, public meetupService: MeetupService) { }

  ngOnInit() {
    this.authService.user.subscribe(dataLastEmittedFromObserver => {
      this.currentUser = dataLastEmittedFromObserver;
      this.currentUserKey = this.currentUser.uid;
      this.currentUserName = this.currentUser.displayName;
      console.log(this.currentUserName);
      this.meetupService.getMeetups().subscribe(dataLastEmittedFromObserver => {
        this.allMeetups = dataLastEmittedFromObserver;
        this.meetupsForUser = this.meetupService.getMeetupsForUser(this.currentUserKey, this.allMeetups);
      });
    })


  }

  goToDetailsPage(clickedMeetup) {
    this.router.navigate(['meetups', clickedMeetup.$key]);
  }
}
