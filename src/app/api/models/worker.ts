/* tslint:disable */
import { Department } from './department';
import { User } from './user';
import { WorkdayResult } from './workday-result';
export interface Worker {
  department?: Department;
  departmentId?: number;
  firstName?: string;
  id?: number;
  lastName?: string;
  user?: User;
  userId?: number;
  workdayResults?: Array<WorkdayResult>;
}
