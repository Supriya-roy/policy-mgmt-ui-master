import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Http, Response, Headers} from '@angular/http';
import { URLSearchParams } from '@angular/http';
import {Policy} from '../_models/policy';

@Injectable()
export class PolicyService {

  private policyURL = environment.policyURL;
  constructor(private http: Http) { }

  getPolicyName(policyId: string): Observable<string> {
    // console.log(JSON.stringify({ policyId: policyId}));
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('policyId', policyId);
    return this.http.post(`${this.policyURL}/getPolicy` , urlSearchParams)
      .map(mapPolicyFromResponse);
  }
  getAllPolicies(): Observable<Policy[]> {
    console.log('In get all policies');
    return this.http.get(`${this.policyURL}/getAllPolicies`)
      .map(mapPoliciesFromResponse);
  }
  savePolicy(policy: Policy) {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('policyNumber', policy.policyNumber);
    urlSearchParams.append('policyName', policy.policyName);
    urlSearchParams.append('policyDetails', policy.policyDetails);
    return this.http.post(`${this.policyURL}/addOrUpdate` , urlSearchParams)
      .map(mapSavePolicyResponse);
  }
}

function mapPolicyFromResponse(response: Response): string {
  return toPolicyName(response.json());
}
function toPolicyName(r: any): string {
  return r.status === '1' ? r.policy.policyName : null;
}
function mapPoliciesFromResponse(response: Response): Policy[] {
  return toPolicies(response.json());
}
function toPolicies(r: any): Policy[] {
  return r.status === '1' ? r.policies : null;
}
function mapSavePolicyResponse(response: Response): string {
  return toSaveMessage(response.json());
}
function toSaveMessage(r: any): string {
  return r.status === '1' ? r.message : 'Error updating policy.';
}
