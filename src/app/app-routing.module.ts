import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { LoginComponent } from './user-auth/login/login.component';
import { TurfModalComponent } from './turf-modal/turf-modal.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthguardServiceService } from './Services/authguard-service.service';







const routes: Routes = [

    {path:'auth', loadChildren: () =>import('./user-auth/user-auth.module').then(m => m.UserAuthModule)},
    {path:'home', loadChildren:()=>import('./home-module/home-module.module').then(n=>n.HomeModuleModule)},
    {path:'admin',loadChildren:()=>import('./admin/admin.module').then(l=>l.AdminModule)},
    {path:'', redirectTo:'home',pathMatch:"full"},
    {path:'pagenotfound', component:PagenotfoundComponent}
   
  
    // {path:'admin', redirectTo:'admin',pathMatch:"full"},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
