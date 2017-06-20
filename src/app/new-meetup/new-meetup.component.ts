import { Component, OnInit } from '@angular/core';
import { MeetupService } from '../meetup.service';
import { Meetup } from '../meetup.model';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-new-meetup',
  templateUrl: './new-meetup.component.html',
  styleUrls: ['./new-meetup.component.css'],
  providers: [MeetupService, UserService]
})
export class NewMeetupComponent implements OnInit {
  userId: string;
  currentUser;

  constructor(private meetupService: MeetupService, private userService: UserService) { }

  ngOnInit() {
    this.userId = '-Kn5AMyUvsO1zpCgRAGb';
    this.userService.getUserById(this.userId).subscribe(userDataLastEmittedFromObserver => {
      this.currentUser = userDataLastEmittedFromObserver;
    });
  }

  submitForm(title: string, description: string, time: string, place: string) {
    const newMeetup = new Meetup (title, description, time, place);
    const currentUser = this.currentUser;
    let currentUserKey = this.userService.getKey(currentUser);
    newMeetup.usersPerMeetup.push(currentUserKey);
    newMeetup.usersPerMeetup.shift();
    this.meetupService.addMeetup(newMeetup);
  }

}
