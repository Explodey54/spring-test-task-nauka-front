/* tslint:disable */
export interface User {
  id?: number;
  password?: string;
  role?: 'ADMIN' | 'MANAGER_DEPARTMENTS' | 'MANAGER_WORKERS' | 'TIMEKEEPER' | 'GUEST';
  username?: string;
}
