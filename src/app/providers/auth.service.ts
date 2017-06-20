import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { CurrentUser } from '../globals';

// import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2'

@Injectable()
export class AuthService {
  userDisplayName: string = null;
  userEmail:string;
  uid:string;
  currentUser = new CurrentUser;
  user: Observable<firebase.User>;
  provider = new firebase.auth.GoogleAuthProvider();
  loggedIn:boolean = false;
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
  }

  loginWithGoogle(){
    this.afAuth.auth.signInWithPopup(this.provider).then((result) => {
      this.userDisplayName = result.user.displayName;
      this.userEmail = result.user.email;
      this.uid = result.user.uid;
      this.makeUser();
      this.loggedIn = true;
      console.log(this.uid);
    })
    this.currentUser.userId = this.uid;
    // console.log(this.currentUser.userId);
  }
  logout(){
    this.afAuth.auth.signOut();
    this.loggedIn = false;
  }


  makeUser(){
      this.router.navigate([''])
  }








}






// firebase.auth().onAuthStateChanged(function(user) {
// if (user) {
//   console.log(userDisplayName);
//   console.log(userEmail);
//   // User is signed in.
// } else {
//   // No user is signed in.
// }
// })
