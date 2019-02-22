import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { PropertyListComponent } from '@components/property/property-list.component';
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/property', pathMatch: 'full' },
  { path: 'property', component: PropertyListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      console.log(event);
    })
  }
}
