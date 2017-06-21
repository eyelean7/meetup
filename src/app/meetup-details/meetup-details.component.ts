import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Meetup } from '../meetup.model';
import { MeetupService } from '../meetup.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-meetup-details',
  templateUrl: './meetup-details.component.html',
  styleUrls: ['./meetup-details.component.css'],
  providers: [MeetupService, AuthService]
})
export class MeetupDetailsComponent implements OnInit {
  meetupId;
  meetupToDisplay;
  currentUser;

  constructor(private route: ActivatedRoute, private location: Location, private meetupService: MeetupService, private authService: AuthService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.meetupId = urlParameters['id'];
    });
    this.meetupService.getMeetupById(this.meetupId).subscribe(dataLastEmittedFromObserver => {
      this.meetupToDisplay = dataLastEmittedFromObserver;
    });
    this.authService.user.subscribe(dataLastEmittedFromObserver => {
      this.currentUser = dataLastEmittedFromObserver;
      console.log(this.currentUser.uid);
    });
  }

  join() {
    let currentMeetup = this.meetupToDisplay;
    let currentUserKey = this.currentUser.uid;
    currentMeetup.usersPerMeetup.push(currentUserKey);
    this.meetupService.updateMeetup(currentMeetup);
  }
}
