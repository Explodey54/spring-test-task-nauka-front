import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterContainerComponent} from "@auth/containers/register-container/register-container.component";
import {LoginContainerComponent} from "@auth/containers/login-container/login-container.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginContainerComponent
  },
  {
    path: 'register',
    component: RegisterContainerComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
