import {Component, ChangeDetectionStrategy, Output, EventEmitter, Input} from '@angular/core';
import {Department} from "@api/models/department";
import {Empty} from "@app/shared/types/Empty";

@Component({
  selector: 'nauka-time-report-department-list',
  templateUrl: './time-report-department-list.component.html',
  styleUrls: ['./time-report-department-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeReportDepartmentListComponent {
  @Input() departments: Department[] | Empty = [];
  @Input() selected: number | Empty;
  @Output() departmentSelect = new EventEmitter<number>();

  onDepartmentClick(department: Department) {
    if (this.selected === department.id) return;

    this.departmentSelect.emit(department.id);
    this.selected = department.id;
  }
}
