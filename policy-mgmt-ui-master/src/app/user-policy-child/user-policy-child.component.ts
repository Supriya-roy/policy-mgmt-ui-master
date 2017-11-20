import {Component, Input, OnInit} from '@angular/core';
import {UserPolicy} from '../_models/user-policy';
import {DatePipe} from '@angular/common';
import {PolicyService} from '../_service/policy.service';

@Component({
  selector: '[app-user-policy-child]',
  templateUrl: './user-policy-child.component.html',
  styleUrls: ['./user-policy-child.component.scss']
})
export class UserPolicyChildComponent implements OnInit {
  @Input() currentPolicy: UserPolicy;
  validity: string;
  datePattern = 'dd/MM/yyyy';
  policyName: string;
  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    // console.log('policy: ' + this.currentPolicy.policyId);
    const policyEndDate = this.currentPolicy.policyEndDate;
    const datePipe = new DatePipe('en-US');
    const datePatternInit = 'MM/dd/yyyy';
    const policyEndDateString = policyEndDate !== null ? datePipe.transform(new Date(policyEndDate), datePatternInit) : null;
    // console.log('this.policyEndDateStringDatePipe: ' + policyEndDateString);

    const policyEndDateDate  = policyEndDateString !== null ? new Date(policyEndDateString) : null;
    const todayString = datePipe.transform(new Date(), datePatternInit);
    // console.log('todayString: ' + todayString);
    const todayDate  = todayString !== null ? new Date(todayString) : null;
    // console.log('todayDate: ' + todayDate + ' policyEndDateDate: ' + policyEndDateDate);
    this.validity = (policyEndDateDate !== null) && (policyEndDateDate < todayDate)  ? 'No' : 'Yes';
    this.getPolicyName();

  }

  getPolicyName() {
    this.policyService.getPolicyName(this.currentPolicy.policyId)
      .subscribe(r => this.policyName = r);
  }

}
