import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LastValuesComponent } from './last-values/last-values.component';
import { ValueDetailComponent } from './value-detail/value-detail.component';
import { DateValueDetailComponent } from './date-value-detail/date-value-detail.component';

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
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    SharedModule
  ]
})
export class PagesModule { }
