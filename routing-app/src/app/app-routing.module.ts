import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirstDetailsComponent } from './first-details/first-details.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

import { YourGuardGuard } from './your-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/first-component', pathMatch: 'full' },
  { path: 'first-component', component: FirstComponent, canActivate: [YourGuardGuard], children: [
    {
      path: 'child-a', 
      component: ChildAComponent
    },
    {
      path: 'child-b',
      component: ChildBComponent
    },
  ], },
  { path: 'first-component/:id', component: FirstDetailsComponent, canActivate: [YourGuardGuard] },
  { path: 'second-component', component: SecondComponent, canActivate: [YourGuardGuard] },
  { path: '**', component: PageNotFoundComponent, canActivate: [YourGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  FirstComponent,
  SecondComponent,
  PageNotFoundComponent,
  FirstDetailsComponent,
  ChildAComponent,
  ChildBComponent
]
