import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {User} from '../_models/user';
import {environment} from '../../environments/environment';
import { URLSearchParams } from '@angular/http';


@Injectable()
export class UserService {

  // private userURL = 'http://localhost:9080/user';
  private userURL = environment.userURL;
  constructor(private http: Http) { }

  save(user: User): Observable<User> {
    // save user from here
    // alert(`saved!!! ${JSON.stringify(user)}`);
    // user.confirmPassword = null;
    return this
      .http
      .put(`${this.userURL}/save`, JSON.stringify(user), {headers: this.getHeaders()})
      .map(mapUserFromResponse);
  }

  login(userName: string, password: string): Observable<User> {
    console.log('in user service login');
    console.log(JSON.stringify({ userName: userName, password: password }));
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('userName', userName);
    urlSearchParams.append('password', password);

    return this.http.post(`${this.userURL}/login`
      , urlSearchParams)
      .map(mapUserFromResponse);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
  private getHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json;charset=UTF-8');
    return headers;
  }
}

function mapUserFromResponse(response: Response): User {
  return toUser(response.json());
}
/*function toUser(r: any): User {
  const respUser = r.status === '1' ? r.user : null;
  const user = respUser != null ? <User> ({
    userName: respUser.userName,
    role: respUser.role,
    firstName: respUser.firstName,
    lastName: respUser.lastName
  }) : null;
  return user;
}*/
function toUser(r: any): User {
  const respUser = r.status === '1' ? r.user : null;
  const user = r.status === '1'  ? <User> ({
    userName: r.user.userName,
    role: r.user.role,
    firstName: r.user.firstName,
    lastName: r.user.lastName,
    policies: r.user.policies
  }) : <User> ({
    userError: r.user.userError
  });
  return user;
}
