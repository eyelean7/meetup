import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  submitForm(username: string, password: string, zipCode: string) {
    var meetups: string[] = [];
    var dateTimeCreated = new Date();
    var newUser = new User(username, password, zipCode, dateTimeCreated.toString(), meetups);
    this.userService.addUser(newUser);
  }
}
