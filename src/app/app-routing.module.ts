import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { MainTemplateComponent } from './template/main-template/main-template.component';

import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'view',
    component: MainTemplateComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
