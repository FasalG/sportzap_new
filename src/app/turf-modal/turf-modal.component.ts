import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TurfownerpageService } from 'src/app/Services/turfownerpage.service';

@Component({
  selector: 'app-turf-modal',
  templateUrl: './turf-modal.component.html',
  styleUrls: ['./turf-modal.component.css'],
  providers:[TurfownerpageService]
})
export class TurfModalComponent implements OnInit {

  turfid:any
  turfsdata:any
  eachturfmodaldata:any;
  amenityData:any



  constructor(private turfdetails:TurfownerpageService, private router:ActivatedRoute, private routr:Router){}
    

      ngOnInit():void{         
          this.router.params.subscribe((d:any)=>{
            this.turfid=d.id  
            this.getTurfsdet()  
            this.getamenityDetails()
         
          }         
          )

          this.getBookngprediction()  

          console.log(this.turfid)
        

    
      }

      //Predicted booking next week
      getBookngprediction(){
            this.turfdetails.getBookingprediction(this.turfid).subscribe((d:any)=>
            {
              console.log(d)
            }
            )
      }

       getTurfsdet(){
        this.turfdetails.getownerTurfs().subscribe((d:any)=>{
          this.turfsdata=d
          console.log(this.turfsdata)
          if(this.turfsdata && this.turfid){
              this.getEachturf()
          }
        })  
       

       }

       
      
      
       getEachturf(){
        if (this.turfsdata && this.turfid) {
          this.eachturfmodaldata = this.turfsdata.filter((turf: any) => turf.id  === parseInt(this.turfid));
          console.log(this.eachturfmodaldata);
        
        }   

}

//deleteturf
deleteTurf(id:any){
  alert('Confirm Delete')
  this.turfdetails.deleteownerTurf(id).then(()=>{
  this.turfdetails=this.turfsdata.filter((d:any)=>
    d.id!==id,
    this.routr.navigateByUrl('owner')
  )
 
  }).catch((error:any)=>{
    console.error("error deleting user",error)
   });   

}

logout(){
  localStorage.clear()
  this.routr.navigateByUrl('/home')
}


getamenityDetails(){
  this.turfdetails.getAmenity().subscribe((d:any)=>{
  this.amenityData=d
  console.log(this.amenityData)




  }
  )

}







}