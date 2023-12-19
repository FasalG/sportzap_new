import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ownerService } from 'src/app/Services/ownerService.service';

@Component({
  selector: 'app-turf-mngmnt',
  templateUrl: './turf-mngmnt.component.html',
  styleUrls: ['./turf-mngmnt.component.css'],
  providers:[ownerService]
})
export class TurfMngmntComponent {
  turfOwnerData:any;


  constructor(private OwnerService:ownerService,private route:Router){
    this.OwnerService.turfOwner().subscribe((data:any)=>{
      this.turfOwnerData=data
      console.log(this.turfOwnerData)
    })
  } 

  deleteOwner(ownerId:any){
      this.OwnerService.TurfOwnerdelete(ownerId).then(()=>{
        this.turfOwnerData.message=this.turfOwnerData.message.filter((d:any)=>d.id !==ownerId)
      })
  };
  singleOwnerDetails(ownerId:any){
    this.route.navigate(['admin/turf/ownerddetail/'+ownerId])
}

}
