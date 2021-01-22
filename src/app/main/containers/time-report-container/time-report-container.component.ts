import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {BehaviorSubject, forkJoin, Observable, of} from "rxjs";
import {Department} from "@api/models/department";
import {
  CalendarDayControllerService,
  CalendarDayStatusControllerService,
  DepartmentControllerService,
  WorkerControllerService
} from "@api/services";
import {Month, now} from "@app/shared/helpers/TimeUtils";
import {CalendarDay, CalendarDayStatus, Worker} from "@api/models";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Empty} from "@app/shared/types/Empty";

export interface TimeReportPageQuery {
  department?: string | number;
  month?: string | number;
}

@Component({
  selector: 'nauka-time-report-container',
  templateUrl: './time-report-container.component.html',
  styleUrls: ['./time-report-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeReportContainerComponent implements OnInit {
  selectedMonth$ = new BehaviorSubject<Month>(now().getMonth() + 1);
  selectedDepartment$ = new BehaviorSubject<number | Empty>(null);
  workers$ = new BehaviorSubject<Worker[] | Empty>(null);
  calendarDays$ = new BehaviorSubject<CalendarDay[] | Empty>(null);

  departments$: Observable<Department[] | Empty>;
  calendarDayStatuses$:  Observable<CalendarDayStatus[] | Empty>;
  defaultCalendarDayStatus$: Observable<CalendarDayStatus | Empty>;

  constructor(
    private departmentApi: DepartmentControllerService,
    private workerApi: WorkerControllerService,
    private calendarDaysApi: CalendarDayControllerService,
    private calendarDayStatusApi: CalendarDayStatusControllerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.departments$ = this.departmentApi.getAllUsingGET2()
      .pipe(map(i => i.data));
    this.calendarDayStatuses$ = this.calendarDayStatusApi.getAllUsingGET1()
      .pipe(map(i => i.data));
    this.defaultCalendarDayStatus$ = this.calendarDayStatuses$
      .pipe(map(i => i?.find(i => i.default))
    );
  }

  ngOnInit(): void {
    this.processRoute(this.route.snapshot);
    this.updateData();
  }

  onDepartmentSelect(id: number) {
    this.selectedDepartment$.next(id);
    this.updateQuery({ department: id });
    this.updateData();
  }

  onMonthSelect(month: Month) {
    this.selectedMonth$.next(month);
    this.updateQuery({ month });
    this.updateData();
  }

  private updateData() {
    const id = this.selectedDepartment$.value;
    const month = this.selectedMonth$.value;

    if (!id) return;

    const workers = this.workerApi.getAllUsingGET6({
      department: id,
      workdayMonth: month
    });
    const calendarDays = this.calendarDaysApi.getAllUsingGET({month});

    forkJoin({
      workers,
      calendarDays: month ? calendarDays : of(null)
    }).subscribe(({workers, calendarDays}) => {
      this.workers$.next(workers.data);
      if (calendarDays) {
        this.calendarDays$.next(calendarDays.data);
      }
    });
  }

  private processRoute(route: ActivatedRouteSnapshot) {
    if (!route.queryParams) return;
    const {month, department} = route.queryParams;

    if (month) {
      this.selectedMonth$.next(Number(month));
    }
    if (department) {
      this.selectedDepartment$.next(Number(department));
    }
  }

  private updateQuery(queryParams: TimeReportPageQuery) {
    this.router.navigate([], { queryParams, queryParamsHandling: 'merge' });
  }
}
