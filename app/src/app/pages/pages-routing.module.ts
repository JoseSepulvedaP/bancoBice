import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LastValuesComponent } from './last-values/last-values.component';
import { ValueDetailComponent } from './value-detail/value-detail.component';
import { DateValueDetailComponent } from './date-value-detail/date-value-detail.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'last',
    pathMatch: 'full',
    component: LastValuesComponent
  },
  {
    path: 'values/:key',
    pathMatch: 'full',
    component: ValueDetailComponent
  },
  {
    path: 'date/:key/:date',
    pathMatch: 'full',
    component: DateValueDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
