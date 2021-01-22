import {createComponentFactory, Spectator} from "@ngneat/spectator/jest";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MockComponents, MockProvider} from "ng-mocks";
import {
  TimeReportContainerComponent,
  TimeReportPageQuery
} from "@main/containers/time-report-container/time-report-container.component";
import {TimeReportDepartmentListComponent} from "@main/components/time-report-department-list/time-report-department-list.component";
import {TimeReportTableComponent} from "@main/components/time-report-table/time-report-table.component";
import {TimeReportMonthListComponent} from "@main/components/time-report-month-list/time-report-month-list.component";
import {Month} from "@app/shared/helpers/TimeUtils";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {fakeAsync} from "@angular/core/testing";
import {WorkerControllerService} from "@api/services/worker-controller.service";
import {of} from "rxjs";
import spyOn = jest.spyOn;
import {CalendarDayControllerService} from "@api/services";

describe('TimeReportContainerComponent', () => {
  let spectator: Spectator<TimeReportContainerComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  let httpMock: HttpTestingController;

  const createComponent = createComponentFactory({
    component: TimeReportContainerComponent,
    imports: [HttpClientTestingModule, RouterTestingModule],
    mocks: [Router],
    providers: [
      MockProvider(ActivatedRoute, {
        snapshot: {} as any
      }),
    ],
    declarations: MockComponents(
      TimeReportDepartmentListComponent,
      TimeReportTableComponent,
      TimeReportMonthListComponent
    )
  });

  beforeEach(() => {
    spectator = createComponent();
    router = spectator.inject(Router);
    activatedRoute = spectator.inject(ActivatedRoute);
    httpMock = spectator.inject(HttpTestingController);
    activatedRoute.snapshot = {} as ActivatedRouteSnapshot;
  });

  beforeAll(() => {
    const fakeNow = new Date(2020, 3); //2020-04-01
    jest.spyOn(Date, 'now').mockImplementation(() => fakeNow.getTime());
  });

  afterAll(() => {
    jest.spyOn(Date, "now").mockRestore()
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should show department list', () => {
    expect(spectator.query(TimeReportDepartmentListComponent)).not.toBeNull();
  });

  it('should store department id on depList output', () => {
    spectator.triggerEventHandler(TimeReportDepartmentListComponent, 'departmentSelect', 5);
    expect(spectator.component.selectedDepartment$.value).toEqual(5);
  });

  it('should get worker data on department select', () => {
    const spy = spyOn(spectator.inject(WorkerControllerService), 'getAllUsingGET6');

    spectator.triggerEventHandler(TimeReportDepartmentListComponent, 'departmentSelect', 5);

    expect(spy).toHaveBeenCalledWith({
      department: 5,
      workdayMonth: 4
    });
  });

  it('should contain current month on init', () => {
    expect(spectator.component.selectedMonth$.value).toEqual(Month.April);
  });

  it('should update workers on month select with selected department', () => {
    const spy = spyOn(spectator.inject(WorkerControllerService), 'getAllUsingGET6');
    spectator.component.selectedDepartment$.next(5);
    spectator.triggerEventHandler(TimeReportMonthListComponent, 'monthSelect', Month.July);

    expect(spy).toHaveBeenCalledWith({
      department: 5,
      workdayMonth: 7
    });
  });

  it('should not update workers on month select with empty selected department', () => {
    const spy = spyOn(spectator.inject(WorkerControllerService), 'getAllUsingGET6');
    spectator.triggerEventHandler(TimeReportMonthListComponent, 'monthSelect', Month.July);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should get data from query params', () => {
    const query: TimeReportPageQuery = {month: '5', department: '10'};
    activatedRoute.snapshot.queryParams = query;
    spectator.component.ngOnInit();

    expect(spectator.component.selectedMonth$.value).toEqual(5);
    expect(spectator.component.selectedDepartment$.value).toEqual(10);
  });

  it('should call request on valid query params', () => {
    const spy = spyOn(spectator.inject(WorkerControllerService), 'getAllUsingGET6');
    const query: TimeReportPageQuery = {month: '5', department: '10'};
    activatedRoute.snapshot.queryParams = query;
    spectator.component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should update query on department select', fakeAsync(() => {
    spectator.triggerEventHandler(TimeReportDepartmentListComponent, 'departmentSelect', 5);

    expect(router.navigate).toHaveBeenCalledWith([], {queryParams: { department: 5 }, queryParamsHandling: 'merge'});
  }));

  it('should update query on month select', () => {
    spectator.triggerEventHandler(TimeReportMonthListComponent, 'monthSelect', Month.November);

    expect(router.navigate).toHaveBeenCalledWith([], {queryParams: { month: 11 }, queryParamsHandling: 'merge'});
  });

  it('should get calendar days on department and month select', () => {
    const spy = spyOn(spectator.inject(CalendarDayControllerService), 'getAllUsingGET');

    spectator.triggerEventHandler(TimeReportDepartmentListComponent, 'departmentSelect', 6);
    spectator.triggerEventHandler(TimeReportMonthListComponent, 'monthSelect', Month.November);

    expect(spy).toHaveBeenCalled();
  });

  it('should update calendars on first department select', () => {
    const spy = spyOn(spectator.inject(CalendarDayControllerService), 'getAllUsingGET');
    spy.mockReturnValue(of({data: [{id:12}]}));

    spectator.triggerEventHandler(TimeReportDepartmentListComponent, 'departmentSelect', 6);
    httpMock.match(() => true).forEach(i => i.flush({}));

    expect(spectator.component.calendarDays$.value).toEqual([{id:12}]);
  });
});
