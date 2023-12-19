import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserMngmntComponent } from './user-mngmnt/user-mngmnt.component';
import { TurfMngmntComponent } from './turf-mngmnt/turf-mngmnt.component';
import { BookingMngmntComponent } from './booking-mngmnt/booking-mngmnt.component';
import { ReportComponent } from './report/report.component';
import { TransMngmntComponent } from './trans-mngmnt/trans-mngmnt.component';
import { EachturfComponent } from './turf-mngmnt/eachturf/eachturf.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    UserMngmntComponent,
    TurfMngmntComponent,
    BookingMngmntComponent,
    ReportComponent,
    TransMngmntComponent,
    EachturfComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
 
    FormsModule
   

  ]
})
export class AdminModule { }
