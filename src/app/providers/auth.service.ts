import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

// import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2'

@Injectable()
export class AuthService {
  userName;
  userEmail:string;
  uid:string;
  user: Observable<firebase.User>;
  provider = new firebase.auth.GoogleAuthProvider();
  loggedIn:boolean = false;
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
  }

  loginWithGoogle(){
    this.afAuth.auth.signInWithPopup(this.provider).then((result) => {
      this.userName = result.user.displayName;
      this.userEmail = result.user.email;
      this.uid = result.user.uid;
      this.loggedIn = true;
      this.makeUser();
    });
  }
  logout(){
    this.loggedIn = false;
    this.afAuth.auth.signOut();
  }


  makeUser(){
      this.router.navigate(['']);
      console.log(this.userName);
  }

  getUser(){
    console.log(this.userName);
    return this.userName;
  }








}






// firebase.auth().onAuthStateChanged(function(user) {
// if (user) {

//   // User is signed in.
// } else {
//   // No user is signed in.
// }
// })
