import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getUsers() {
    return this.users;
  }

  addUser(newUser: User) {
    console.log('adding user');
    this.users.push(newUser);
  }

  getUserById(meetupId: string) {
    return this.database.object('users/' + meetupId);
  }

  updateUser(localUpdatedUser) {
    let meetupEntryInFirebase = this.getUserById(localUpdatedUser.$key);
    meetupEntryInFirebase.update({username: localUpdatedUser.username,
                                  password: localUpdatedUser.password,
                                  zipCode: localUpdatedUser.zipCode,
                                  dateTimeCreated: localUpdatedUser.dateTimeCreated,
                                  meetups: localUpdatedUser.meetups});
  }

  deleteUser(localUserToDelete) {
    let meetupEntryInFirebase = this.getUserById(localUserToDelete.$key);
    meetupEntryInFirebase.remove();
  }

  getKey(localUserToUpdate) {
    let key = localUserToUpdate.$key;
    return key;
  }

}
