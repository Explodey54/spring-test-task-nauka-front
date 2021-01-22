import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimeReportContainerComponent} from "@main/containers/time-report-container/time-report-container.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TimeReportContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
