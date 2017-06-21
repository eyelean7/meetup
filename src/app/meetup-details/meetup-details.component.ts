import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Meetup } from '../meetup.model';
import { MeetupService } from '../meetup.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from '../providers/auth.service';
import { Carpool } from '../carpool.model';
import { CarpoolService } from '../carpool.service';

@Component({
  selector: 'app-meetup-details',
  templateUrl: './meetup-details.component.html',
  styleUrls: ['./meetup-details.component.css'],
  providers: [MeetupService, AuthService, CarpoolService]
})
export class MeetupDetailsComponent implements OnInit {
  meetupId;
  meetupToDisplay;
  currentUser;
  carpoolsForMeetup = [];

  constructor(private route: ActivatedRoute, private location: Location, private meetupService: MeetupService, private authService: AuthService, private carpoolService: CarpoolService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.meetupId = urlParameters['id'];
    });
    this.meetupService.getMeetupById(this.meetupId).subscribe(dataLastEmittedFromObserver => {
      this.meetupToDisplay = dataLastEmittedFromObserver;
    });
    this.authService.user.subscribe(dataLastEmittedFromObserver => {
      this.currentUser = dataLastEmittedFromObserver;
    });
    this.carpoolService.getCarpools().subscribe(dataLastEmittedFromObserver => {
      let allCarpools = dataLastEmittedFromObserver;
      let title = this.meetupToDisplay.title;
      for (let carpool of allCarpools) {
        if (carpool.meetup === title) {
          this.carpoolsForMeetup.push(carpool);
        }
      }
      console.log(this.carpoolsForMeetup);
    });
  }

  join() {
    let currentMeetup = this.meetupToDisplay;
    let currentUserKey = this.currentUser.uid;
    if (!currentMeetup.usersPerMeetup.includes(currentUserKey)) {
      currentMeetup.usersPerMeetup.push(currentUserKey);
    }
    this.meetupService.updateMeetup(currentMeetup);
  }

  startCarpool() {
    const currentMeetup = this.meetupToDisplay.title;
    const host = this.currentUser.displayName;
    const newCarpool = new Carpool (host, currentMeetup);
    newCarpool.usersPerCarpool.push(host);
    newCarpool.usersPerCarpool.shift();
    this.carpoolService.addCarpool(newCarpool);
  }
}
