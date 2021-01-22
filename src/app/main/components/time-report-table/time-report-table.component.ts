import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CalendarDay, CalendarDayStatus, WorkdayResult, Worker} from "@api/models";
import {Month, now} from "@app/shared/helpers/TimeUtils";
import {Empty} from "@app/shared/types/Empty";
import {Dictionary} from "@app/shared/types/Dictionary";

export interface IDaysData {
  workdayResult?: WorkdayResult;
}

@Component({
  selector: 'nauka-time-report-table',
  templateUrl: './time-report-table.component.html',
  styleUrls: ['./time-report-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeReportTableComponent implements OnChanges {

  @Input() workerList: Worker[] | Empty = null;
  @Input() calendarDays: CalendarDay[] | Empty = null;
  @Input() defaultCalendarDayStatus: CalendarDayStatus | Empty = null;
  @Input() month: number | Empty = null;

  maxDays: number = 0;
  daysData: IDaysData[][] = [];
  monthlyStatuses: CalendarDayStatus[] = [];

  ngOnChanges({month, workerList, calendarDays, defaultCalendarDayStatus}: SimpleChanges): void {
    if (this.month && this.workerList) {
      this.maxDays = this.getMaxDaysInMonth(this.month);
      this.daysData = this.combineDaysData(this.workerList, this.month);
      this.monthlyStatuses = this.processCalendarDays(this.month, this.calendarDays, this.defaultCalendarDayStatus);
    }
  }

  createSummary(results: WorkdayResult[] | Empty): string {
    if (!results) return String(results);

    const dictionary: Dictionary<number> = {};
    results.forEach(i => {
      const shortTitle = i.status?.shortTitle;
      if (shortTitle) {
        if (dictionary[shortTitle] === undefined) {
          dictionary[shortTitle] = 0;
        }
        dictionary[shortTitle] = dictionary[shortTitle] + 1;
      }
    });
    return Object.entries(dictionary)
      .map(([key, value]) => `${key}(${value})`)
      .join(';');
  }

  // Creates array (linked to worker) of arrays (linked to month days) containing IDaysData objects,
  // which contains data corresponding to the linked worker and date
  // If defaultCalendarDayStatus exists, fill empty calendarDays with default copy
  // output scheme: output[workerI][dayI].{IDaysData key}
  private combineDaysData(
    workers: Worker[],
    month: number,
  ): IDaysData[][] {
    // Create empty array based on workers
    // Fill the data from workdayResult in worker
    return workers.map(i => {
      const daysData: IDaysData[] = new Array(this.getMaxDaysInMonth(month))
        .fill(null).map(() => ({}));
      i.workdayResults?.forEach(k => {
        if (!k.date) return;
        const day = new Date(k.date).getDate() - 1;
        daysData[day].workdayResult = k;
      });
      return daysData;
    });
  }

  private processCalendarDays(
    month: Month,
    calendarDays?: CalendarDay[] | null,
    defaultStatus?: CalendarDayStatus | null
  ): CalendarDayStatus[] {
    // Create empty array with length equal days in month
    const output: CalendarDayStatus[] = new Array(this.getMaxDaysInMonth(month));

    // If calendarDays is present, add days to empty array, based on date
    if (!calendarDays) return output;
    calendarDays.forEach(i => {
      if (!i.date) return;
      const day = new Date(i.date).getDate() - 1;
      if (i.status) {
        output[day] = i.status;
      }
    });

    // If defaultStatus is present fill empty days with default copy
    if (!defaultStatus) return output;
    for (let i = 0; i < output.length; i++) {
      if (!output[i]) output[i] = defaultStatus;
    }

    return output;
  }

  private getMaxDaysInMonth(month: number): number {
    if (month > 12 || month < 0) {
      throw Error('Month should be in 1-12 bounds!');
    }

    return new Date(now().getFullYear(), month, 0).getDate();
  }
}
