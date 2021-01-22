import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeReportMonthListComponent } from './time-report-month-list.component';
import {createHostFactory, Spectator} from "@ngneat/spectator";
import {testId} from "@test/http-predicates";
import {Month} from "@app/shared/helpers/TimeUtils";

describe('TimeReportMonthListComponent', () => {
  let spectator: Spectator<TimeReportMonthListComponent>;
  const createComponent = createHostFactory({
    component: TimeReportMonthListComponent,
    // imports: [ReactiveFormsModule]
  });

  const initComponent = (hostProps?: {[key: string]: any}) => {
    return createComponent(`
      <nauka-time-report-month-list
      ></nauka-time-report-month-list>`,
      { hostProps }
    );
  }

  it('should create', () => {
    spectator = initComponent();
    expect(spectator.component).toBeTruthy();
  });

  it('should display month list buttons', () => {
    spectator = initComponent();

    const monthList = spectator.queryAll(testId('month'));
    expect(monthList).toHaveLength(12);
    expect(monthList[2].textContent).toContain('March');
  });

  it('should output month select on month click', () => {
    spectator = initComponent();
    let month;
    spectator.output('monthSelect').subscribe(i => month = i);

    const monthList = spectator.queryAll<HTMLElement>(testId('month'));
    monthList[3].click();

    expect(month).toEqual(Month.April);
  });
});
