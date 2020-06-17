import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LastValuesComponent } from './last-values/last-values.component';
import { ValueDetailComponent } from './value-detail/value-detail.component';
import { DateValueDetailComponent } from './date-value-detail/date-value-detail.component';

// import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    LastValuesComponent,
    ValueDetailComponent,
    DateValueDetailComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    // SharedModule
  ]
})
export class PagesModule { }
