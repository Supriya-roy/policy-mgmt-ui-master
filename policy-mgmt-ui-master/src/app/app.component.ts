import { Component } from '@angular/core';
import {UserService} from './_service/user.service';
import {PolicyService} from './_service/policy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService, PolicyService]
})
export class AppComponent {
  title = 'Policy Management System';
}
