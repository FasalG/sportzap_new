import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserMngmntComponent } from './user-mngmnt/user-mngmnt.component';
import { TurfMngmntComponent } from './turf-mngmnt/turf-mngmnt.component';
import { BookingMngmntComponent } from './booking-mngmnt/booking-mngmnt.component';
import { ReportComponent } from '../admin/report/report.component';
import { TransMngmntComponent } from './trans-mngmnt/trans-mngmnt.component';
import { EachturfComponent } from './turf-mngmnt/eachturf/eachturf.component';
import { AuthguardServiceService } from '../Services/authguard-service.service';


const routes: Routes = [
  {path:'',redirectTo:'admin', pathMatch:'full'},
   
  {path:'',component:AdminComponent, canActivateChild:[AuthguardServiceService], children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'user', component:UserMngmntComponent},
    {path:'turf', component:TurfMngmntComponent},
    {path:'turf/ownerddetail/:id', component:EachturfComponent},
    {path:'booking',component:BookingMngmntComponent},
    {path:'report',component:ReportComponent},
    {path:'transaction',component:TransMngmntComponent}
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
