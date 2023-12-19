import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eachturf',
  templateUrl: './eachturf.component.html',
  styleUrls: ['./eachturf.component.css']
})
export class EachturfComponent implements OnInit {

  ownerturfdetailsURL:any="http://192.168.1.11:9000/admin_app/owner_retrieve_delete/"

  ownerid:any
  
   constructor(private router:ActivatedRoute, private http:HttpClient){}

   ngOnInit(){
      this.router.params.subscribe((D:any)=>{
        this.ownerid=D.id
        // console.log(this.ownerid.id);
        
      })
      this.getOwnerturdetails()
    
   }


   getOwnerturdetails(){
    this.http.get(this.ownerturfdetailsURL+this.ownerid+'/').subscribe((d:any)=>
      console.log(d)      
    )
  }
  

   
}

