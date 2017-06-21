import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MeetupApi } from 'app/meetupApiKey';
import 'rxjs/Rx';

@Injectable()
export class MeetupApiService {

  constructor(private http: Http, private meetupApiKey: MeetupApi) { }


getMeetups(input) {
    return this.http.get('https://api.meetup.com/2/events?sign=true&group_urlname=' + input +'&format=json&key=1d14496d4c252e17651f6d4e33c3564').map(
      (res) => res.json());

  }
}
