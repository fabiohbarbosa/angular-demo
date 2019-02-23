import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { PropertyListComponent } from '@components/property/property-list.component';
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';
import { LoginComponent } from '@components/login/login.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [

  { path: '', redirectTo: '/property', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'property', component: PropertyListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {

    // route changing
    this.router.events.subscribe(event => {

    });

  }
}
