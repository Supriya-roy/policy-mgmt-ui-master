import {Policy} from './policy';

export interface UserPolicy {
  policyId: string;
  // policyName: string;
  amountPaid: number;
  policyEndDate: Date;
}
