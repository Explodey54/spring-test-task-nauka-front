/* tslint:disable */
export interface RegisterResponse {
  departmentId?: number;
  firstName?: string;
  lastName?: string;
  roleId?: 'ADMIN' | 'MANAGER_DEPARTMENTS' | 'MANAGER_WORKERS' | 'TIMEKEEPER' | 'GUEST';
  userId?: number;
  username?: string;
  workerId?: number;
}
