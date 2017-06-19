import { Component, OnInit } from '@angular/core';
import { MeetupService } from '../meetup.service';
import { Meetup } from '../meetup.model';

@Component({
  selector: 'app-new-meetup',
  templateUrl: './new-meetup.component.html',
  styleUrls: ['./new-meetup.component.css'],
  providers: [MeetupService]
})
export class NewMeetupComponent implements OnInit {

  constructor(private meetupService: MeetupService) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, time: string, place: string) {
    var users: string[] = [];
    var newMeetup = new Meetup (title, description, time, place, users);
    this.meetupService.addMeetup(newMeetup);
  }

}
