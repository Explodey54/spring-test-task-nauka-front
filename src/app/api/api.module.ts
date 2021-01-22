/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AuthControllerService } from './services/auth-controller.service';
import { AutocompleteControllerService } from './services/autocomplete-controller.service';
import { CalendarDayStatusControllerService } from './services/calendar-day-status-controller.service';
import { CalendarDayControllerService } from './services/calendar-day-controller.service';
import { DepartmentControllerService } from './services/department-controller.service';
import { UserControllerService } from './services/user-controller.service';
import { WorkdayResultStatusControllerService } from './services/workday-result-status-controller.service';
import { WorkdayResultControllerService } from './services/workday-result-controller.service';
import { WorkerControllerService } from './services/worker-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AuthControllerService,
    AutocompleteControllerService,
    CalendarDayStatusControllerService,
    CalendarDayControllerService,
    DepartmentControllerService,
    UserControllerService,
    WorkdayResultStatusControllerService,
    WorkdayResultControllerService,
    WorkerControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
