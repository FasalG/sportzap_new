import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';





import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeModuleComponent } from './home-module.component';
import { PartnerWithUsComponent } from './partner-with-us/partner-with-us.component';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { FooterComponent } from "../footer/footer.component";
import { OwnerpaymenthistoryComponent } from './ownerpaymenthistory/ownerpaymenthistory.component';


@NgModule({
  declarations: [
    HomeModuleComponent,
    PartnerWithUsComponent,
    OwnerHomeComponent,
    FooterComponent,
    OwnerpaymenthistoryComponent
  
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    ToastrModule.forRoot() ,
  
    
  ],

})
export class HomeModuleModule { }
