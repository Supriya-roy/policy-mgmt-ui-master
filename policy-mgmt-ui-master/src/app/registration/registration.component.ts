import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../_service/user.service';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: any = {};
  sub: any;
  loading: string;
  userName: string;
  date: Date = new Date();
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
    disableSince: {
      year: this.date.getFullYear(),
      month: this.date.getMonth() + 1,
      day: this.date.getDate()},
    enableDays: [{
      year: this.date.getFullYear(),
      month: this.date.getMonth() + 1,
      day: this.date.getDate()}],
    editableDateField: false,
    openSelectorOnInputClick: true
  };

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loading =  'loading';
  }
  /*ngOnDestroy(): void {
    this.sub.unsubscribe();
  }*/
  saveUserDetails() {
    /*alert(`saved!!! ${JSON.stringify(this.user)}`);*/
    this.userService.save(this.user)
      .subscribe(r => {
        this.userName = r.userName;
        this.loading = null;
      });
  }
  resetUserForm() {
    this.loading =  'loading';
    this.user = {};
  }
}
