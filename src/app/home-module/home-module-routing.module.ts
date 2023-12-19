import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModuleComponent } from './home-module.component';
import { PartnerWithUsComponent } from './partner-with-us/partner-with-us.component';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { TurfModalComponent } from '../turf-modal/turf-modal.component';
import { AuthguardServiceService } from '../Services/authguard-service.service';
import { OwnerpaymenthistoryComponent } from './ownerpaymenthistory/ownerpaymenthistory.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeModuleComponent},
  {path:'partnershipform', component:PartnerWithUsComponent},
  {path:'owner', component:OwnerHomeComponent , canActivate:[AuthguardServiceService]},
  {path:'owner/turfdetails/:id', component:TurfModalComponent, canActivate:[AuthguardServiceService]},
  {path:'owner/bookingHistory', component:OwnerpaymenthistoryComponent, canActivate:[AuthguardServiceService]}
 
    


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
