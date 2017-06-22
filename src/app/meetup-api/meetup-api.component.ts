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
   getRandomInt(input) {

    alert(Math.floor(Math.random()*123));
  }

  displayMeetup(input){
    this.meetups = [];
    this.meetupApiService.getMeetups(input).subscribe(
      (data) => this.meetups =(data)
    );
  }

}
