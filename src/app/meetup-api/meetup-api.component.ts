import { Component, OnInit } from '@angular/core';
import { MeetupApiService } from 'app/meetup-api.service';
import { MeetupApi } from 'app/meetupApiKey';

@Component({
  selector: 'app-meetup-api',
  templateUrl: './meetup-api.component.html',
  styleUrls: ['./meetup-api.component.css'],
  providers: [MeetupApiService, MeetupApi]
})
export class MeetupApiComponent implements OnInit {
  meetups = [];

  constructor(private meetupApiService: MeetupApiService) { }

  ngOnInit() {
  }

  displayMeetup(input){
    this.meetups = [];

    this.meetupApiService.getMeetups(input).subscribe(
      (data) => this.meetups.push(data)


    );
      console.log(this.meetups);
  }

}
