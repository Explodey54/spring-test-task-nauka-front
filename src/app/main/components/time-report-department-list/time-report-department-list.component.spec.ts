import {createHostFactory, Spectator} from "@ngneat/spectator";
import {ReactiveFormsModule} from "@angular/forms";
import {TimeReportDepartmentListComponent} from "@main/components/time-report-department-list/time-report-department-list.component";
import {Department} from "@api/models/department";
import {testId} from "@test/http-predicates";

describe('TimeReportDepartmentListComponent', () => {

  let spectator: Spectator<TimeReportDepartmentListComponent>;
  const createComponent = createHostFactory({
    component: TimeReportDepartmentListComponent,
    // imports: [ReactiveFormsModule]
  });

  const departments: Department[] = [
    {id: 1, title: 'Title UNO'},
    {id: 2, title: 'Title DEUS'}
  ];
  const initComponent = (hostProps?: {[key: string]: any}) => {
    return createComponent(`
      <nauka-time-report-department-list
        [departments]="departments"
      ></nauka-time-report-department-list>`,
      { hostProps }
    );
  }

  it('should create', () => {
    spectator = initComponent()
    expect(spectator.component).toBeTruthy();
  });

  it('should show departments when provided', () => {
    spectator = initComponent({departments});
    expect(spectator.queryAll(testId('department'))).toHaveLength(2);
  });

  it('should show department title when provided', () => {
    spectator = initComponent({departments});
    expect(spectator.queryLast(testId('department'))?.textContent).toContain('Title DEUS');
  });

  it('should output department id on click', () => {
    let departmentId;
    spectator = initComponent({departments});
    spectator.output('departmentSelect').subscribe(i => departmentId = i);

    spectator.queryLast<HTMLElement>(testId('department'))?.click();

    expect(departmentId).toEqual(2);
  });
});
