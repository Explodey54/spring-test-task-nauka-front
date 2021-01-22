import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "@app/shared/shared.module";
import {MainRoutingModule} from "@main/main-routing.module";
import { TimeReportContainerComponent } from './containers/time-report-container/time-report-container.component';
import { TimeReportDepartmentListComponent } from './components/time-report-department-list/time-report-department-list.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "@core/http/AuthInterceptor";
import { TimeReportTableComponent } from './components/time-report-table/time-report-table.component';
import { TimeReportMonthListComponent } from './components/time-report-month-list/time-report-month-list.component';


@NgModule({
  declarations: [TimeReportContainerComponent, TimeReportDepartmentListComponent, TimeReportTableComponent, TimeReportMonthListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class MainModule { }
