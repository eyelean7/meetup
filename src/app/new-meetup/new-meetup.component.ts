import { Component, OnInit } from '@angular/core';
import { MeetupService } from '../meetup.service';
import { Meetup } from '../meetup.model';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-new-meetup',
  templateUrl: './new-meetup.component.html',
  styleUrls: ['./new-meetup.component.css'],
  providers: [MeetupService, UserService, AuthService]
})
export class NewMeetupComponent implements OnInit {
  currentUser;

  constructor(private meetupService: MeetupService, private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe(dataLastEmittedFromObserver => {
      this.currentUser = dataLastEmittedFromObserver;
      console.log(this.currentUser.uid);
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
