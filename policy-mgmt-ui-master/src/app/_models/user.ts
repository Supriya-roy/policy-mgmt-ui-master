import {UserPolicy} from './user-policy';

export interface User {
  // id: number;
  userName?: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  address: string;
  contactNo: number;
  emailAddress: string;
  confirmPassword: string;
  policies?: UserPolicy[];
  role?: string;
  userError?: string;

}
