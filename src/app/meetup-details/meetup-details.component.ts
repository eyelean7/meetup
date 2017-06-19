import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Meetup } from '../meetup.model';
import { User } from '../user.model';
import { MeetupService } from '../meetup.service';
import { UserService } from '../user.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-meetup-details',
  templateUrl: './meetup-details.component.html',
  styleUrls: ['./meetup-details.component.css'],
  providers: [MeetupService, UserService]
})
export class MeetupDetailsComponent implements OnInit {
  meetupId: string;
  userId: string;
  meetupToDisplay;
  currentUser;

  constructor(private route: ActivatedRoute, private location: Location, private meetupService: MeetupService, private userService: UserService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.meetupId = urlParameters['id'];
    });
    this.userId = '-Kn1WteIme57QdttCPiD';

    this.meetupService.getMeetupById(this.meetupId).subscribe(dataLastEmittedFromObserver => {
      this.meetupToDisplay = dataLastEmittedFromObserver;
    });
    this.userService.getUserById(this.userId).subscribe(userDataLastEmittedFromObserver => {
      this.currentUser = userDataLastEmittedFromObserver;
    });
  }

  join() {
    let currentUser = this.currentUser;
    let currentMeetup = this.meetupToDisplay;
    let currentMeetupKey = this.meetupService.getKey(currentMeetup);
    let currentUserKey = this.userService.getKey(currentUser);
    currentUser.meetupsPerUser.push(currentMeetupKey);
    currentMeetup.usersPerMeetup.push(currentUserKey);
    this.meetupService.updateMeetup(currentMeetup);
  }

}
