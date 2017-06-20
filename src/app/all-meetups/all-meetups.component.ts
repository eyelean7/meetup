import { Component, OnInit } from '@angular/core';
import { Meetup } from '../meetup.model';
import { Router } from '@angular/router';
import { MeetupService } from '../meetup.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-all-meetups',
  templateUrl: './all-meetups.component.html',
  styleUrls: ['./all-meetups.component.css'],
  providers: [MeetupService]
})
export class AllMeetupsComponent implements OnInit {
  meetups: FirebaseListObservable<any[]>;

  constructor(private router: Router, private meetupService: MeetupService) { }

  ngOnInit() {
    this.meetups = this.meetupService.getMeetups();
  }

  goToDetailsPage(clickedMeetup) {
    this.router.navigate(['meetups', clickedMeetup.$key]);
  }
}
