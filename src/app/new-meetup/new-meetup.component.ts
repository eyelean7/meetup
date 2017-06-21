import { Component, OnInit } from '@angular/core';
import { MeetupService } from '../meetup.service';
import { Meetup } from '../meetup.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-new-meetup',
  templateUrl: './new-meetup.component.html',
  styleUrls: ['./new-meetup.component.css'],
  providers: [MeetupService, AuthService]
})
export class NewMeetupComponent implements OnInit {
  currentUser;

  constructor(private meetupService: MeetupService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe(dataLastEmittedFromObserver => {
      this.currentUser = dataLastEmittedFromObserver;
    })
  }

  submitForm(title: string, description: string, time: string, place: string) {
    const newMeetup = new Meetup (title, description, time, place);
    let currentUserId = this.currentUser.uid;
    newMeetup.usersPerMeetup.push(currentUserId);
    newMeetup.usersPerMeetup.shift();
    this.meetupService.addMeetup(newMeetup);
  }

}
