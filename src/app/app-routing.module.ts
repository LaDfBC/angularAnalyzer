import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesComponent } from './issues/issues.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';

const routes: Routes = [
  {path: 'issues', component: IssuesComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  {path: 'detail/:id', component: IssueDetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
