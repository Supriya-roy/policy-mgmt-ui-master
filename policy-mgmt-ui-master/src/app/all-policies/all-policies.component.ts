import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PolicyService} from '../_service/policy.service';
import {User} from '../_models/user';
import {Policy} from '../_models/policy';

@Component({
  selector: 'app-all-policies',
  templateUrl: './all-policies.component.html',
  styleUrls: ['./all-policies.component.scss']
})
export class AllPoliciesComponent implements OnInit {
  loggedInUser: User;
  policies: Policy[];
  editedPolicy: Policy;
  @Output()
  policyEdited: EventEmitter<Policy> = new EventEmitter<Policy>();
  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getAllPolicies();
  }

  getAllPolicies() {
    this.policyService.getAllPolicies()
      .subscribe(r => this.policies = r);
  }
  editPolicy(policy: Policy) {
    console.log('in edit policy: ' + policy.policyName);
    policy.isBeingEdited = true;
    console.log('in editing...: ' + policy.policyName);
  }
  savePolicy(policy: Policy) {
    console.log('in save policy: ' + policy.policyName);
    console.log('in editing...: ' + policy.policyDetails);
    this.policyService.savePolicy(policy)
      .subscribe(r => {
        policy.policyUpdateMsg = r;
        policy.isBeingEdited = false;
        this.policyEdited.emit(policy);
      });
  }
}
