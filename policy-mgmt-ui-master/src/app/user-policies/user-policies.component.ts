import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../_models/user';
import {Policy} from '../_models/policy';

@Component({
  selector: 'app-user-policies',
  templateUrl: './user-policies.component.html',
  styleUrls: ['./user-policies.component.scss']
})
export class UserPoliciesComponent implements OnInit {
  loggedInUser: User;

  constructor() { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
