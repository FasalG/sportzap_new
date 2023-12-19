import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations:[
    trigger('widenarrow',[
      state('wide', style({
        width: '16rem'
      })),
      state('narrow',style({
        width:'4.1rem'
      })),
      transition('wide=>narrow',[animate('0.5s')]),
      transition('narrow=>wide',[animate('0.5s')])    
    ])
  ]
})
export class AdminComponent {

  constructor(private route:Router){}

  collapsed:boolean=true
  navData:any=[
    {
      icon:"dashboard",
      routerLink:"dashboard",
      label:"Dashboard"
    },
    {
      icon:"group",
      routerLink:"user",
      label:"User Management"
    },
    {
  
      icon:"monitoring",
      routerLink:"report",
      label:"Reporting & Analytics"
    },
    {
  
      icon:"sports_soccer",
      routerLink:"turf",
      label:"Turf Management"
    },
    {
      icon:"menu_book",
      routerLink:"booking",
      label:"Booking Management"
    },
    {
      icon:"payments",
      routerLink:"transaction",
      label:"Transaction History"
    },
    {
      icon:"trophy",
      routerLink:"rewards",
      label:"Rewards"
    }
  ]
  toggleSidenav(){
    
      this.collapsed=!this.collapsed
  }
  
  logout(){
    localStorage.clear()
    this.route.navigateByUrl('/home')
  }
  
}