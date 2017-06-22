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
lat: number = 47.61;
 lng: number = -122.33;
  formattedTime;
  meetups = [];


  constructor(private meetupApiService: MeetupApiService) { }

  ngOnInit() {
  }
  convertTime(meetups) {
    // Convert milliseconds since since 00:00:00 UTC, Thursday, 1 January 1970 (the epoch in Unix speak)
    var date = new Date();

    // now get individual properties from the date object to construct a new format

    // hours part from the timestamp
    var hours = date.getHours();

    // minutes part from the timestamp
    var minutes = date.getMinutes();

    // seconds part from the timestamp
    var seconds = date.getSeconds();

    // display time in our new format
    this.formattedTime = hours + ':' + minutes + ':' + seconds;
  }
  displayMeetup(input){
    this.meetups = [];
    this.meetupApiService.getMeetups(input).subscribe(
      (data) => this.meetups =(data)
    );
    setInterval(function() {
      console.log(this.meetups);
    }, 1000);


  }



}
