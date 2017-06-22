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
  carpoolAmount;
  currentUserIsAttending = false;

  constructor(private route: ActivatedRoute, private location: Location, private meetupService: MeetupService, private authService: AuthService, private carpoolService: CarpoolService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.meetupId = urlParameters['id'];
    });
    this.meetupService.getMeetupById(this.meetupId).subscribe(dataLastEmittedFromObserver => {
      this.meetupToDisplay = dataLastEmittedFromObserver;
      this.authService.user.subscribe(dataLastEmittedFromObserver => {
        this.currentUser = dataLastEmittedFromObserver;
        if(this.meetupToDisplay.usersPerMeetup.includes(this.currentUser.uid)) {
          this.currentUserIsAttending = true;
        }
        console.log(this.currentUserIsAttending);
      });
    });
    this.carpoolService.getCarpools().subscribe(dataLastEmittedFromObserver => {
      this.carpoolsForMeetup = [];
      let allCarpools = dataLastEmittedFromObserver;
      let title = this.meetupToDisplay.title;
      for (let carpool of allCarpools) {
        if (carpool.meetup === title) {
          this.carpoolsForMeetup.push(carpool);
        }
      }
      this.carpoolAmount = this.carpoolsForMeetup.length;
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

  unJoin(meetupToUnjoin) {
    if (meetupToUnjoin.usersPerMeetup.length>1){
      let currentUserKey = this.currentUser.uid;
      let currentMeetup = meetupToUnjoin;
      let index = currentMeetup.usersPerMeetup.indexOf(currentUserKey);
      currentMeetup.usersPerMeetup.splice(index, 1);
      this.meetupService.updateMeetup(currentMeetup);
      this.currentUserIsAttending = false;
    }

  }

  startCarpool() {
    let hosts = [];
    let currentId = this.currentUser.uid;
    for (let carPool of this.carpoolsForMeetup) {
      hosts.push(carPool.host)
    }
    if (!hosts.includes(this.currentUser.displayName)) {
      if (this.meetupToDisplay.usersPerMeetup.includes(currentId)) {
        const currentMeetup = this.meetupToDisplay.title;
        const host = this.currentUser.displayName;
        const newCarpool = new Carpool (host, currentMeetup);
        newCarpool.usersPerCarpool.push(host);
        newCarpool.usersPerCarpool.shift();
        this.carpoolService.addCarpool(newCarpool);
      }
    }

  }

  joinCarpool(localCarpool) {
    let currentCarpool = localCarpool;
    let user = this.currentUser.displayName;
    let alreadyInCarpool = false;
    for (let carpool of this.carpoolsForMeetup) {
      if (carpool.usersPerCarpool.includes(user)) {
        alreadyInCarpool = true;
      }
    }
    if (currentCarpool.host != user && alreadyInCarpool === false) {
      currentCarpool.usersPerCarpool.push(user);
      this.carpoolService.updateCarpool(currentCarpool);
    }
  }

  deleteCarpool(localCarpool) {
    let currentCarpool = localCarpool;
    this.carpoolService.delete(localCarpool);
  }
}
