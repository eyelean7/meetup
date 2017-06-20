import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [FirebaseService, AngularFireAuth]
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
