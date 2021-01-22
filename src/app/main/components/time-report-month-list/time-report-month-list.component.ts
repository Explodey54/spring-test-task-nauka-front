import {Component, ChangeDetectionStrategy, Output, EventEmitter, Input} from '@angular/core';
import {Month} from "@app/shared/helpers/TimeUtils";

@Component({
  selector: 'nauka-time-report-month-list',
  templateUrl: './time-report-month-list.component.html',
  styleUrls: ['./time-report-month-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeReportMonthListComponent {

  @Input() selected: Month | null | undefined;
  @Output() monthSelect = new EventEmitter<Month>();

  months = [
    {title: 'January', value: Month.January},
    {title: 'February', value: Month.February},
    {title: 'March', value: Month.March},
    {title: 'April', value: Month.April},
    {title: 'May', value: Month.May},
    {title: 'June', value: Month.June},
    {title: 'July', value: Month.July},
    {title: 'August', value: Month.August},
    {title: 'September', value: Month.September},
    {title: 'October', value: Month.October},
    {title: 'November', value: Month.November},
    {title: 'December', value: Month.December},
  ]

  onMonthClick(i: {title: string, value: Month}) {
    if (this.selected === i.value) return;
    
    this.monthSelect.emit(i.value);
    this.selected = i.value;
  }
}
