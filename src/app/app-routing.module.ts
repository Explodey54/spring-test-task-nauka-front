import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedInGuard} from "@core/guards/logged-in.guard";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canLoad: [LoggedInGuard],
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
