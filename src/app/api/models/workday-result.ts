/* tslint:disable */
import { WorkdayResultStatus } from './workday-result-status';
import { Worker } from './worker';
export interface WorkdayResult {
  date?: string;
  id?: number;
  status?: WorkdayResultStatus;
  statusId?: number;
  worker?: Worker;
  workerId?: number;
}
