import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';






import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModuleModule } from "./home-module/home-module.module";
import { UserAuthModule } from "./user-auth/user-auth.module";
import { AdminModule } from "./admin/admin.module";



import { AppComponent } from './app.component';


import { TurfModalComponent } from './turf-modal/turf-modal.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';








@NgModule({
  declarations: [
    AppComponent,

    TurfModalComponent,
     PagenotfoundComponent,   
   
   
    
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModuleModule,
    UserAuthModule,
    AdminModule,
    ReactiveFormsModule,
    FormsModule,

   
   
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
