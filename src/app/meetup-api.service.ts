import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MeetupApi } from 'app/meetupApiKey';
import 'rxjs/Rx';

@Injectable()
export class MeetupApiService {

  constructor(private http: Http, private meetupApiKey: MeetupApi) { }


getMeetups(input) {
    return this.http.get("https://api.meetup.com/find/events?photo-host=public&sig_id=166661482&sig=df78f9541a6e4ddd0122c2e83f1cbdf77f4e3a5f").map(
      (res) => res.json());

  }
}
