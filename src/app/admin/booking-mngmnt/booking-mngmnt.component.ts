import { Component } from '@angular/core';
import { TransServiceService } from 'src/app/Services/trans-service.service';

@Component({
  selector: 'app-booking-mngmnt',
  templateUrl: './booking-mngmnt.component.html',
  styleUrls: ['./booking-mngmnt.component.css'],
  providers:[TransServiceService]
})

export class BookingMngmntComponent {

    bookingData:any;

    constructor(private BookingService:TransServiceService){
      this.BookingService.getBookingDetails().subscribe((d:any)=>{
        this.bookingData=d;
        console.log(d)
      })
    }

    cancelBooking(bookingid:any){
      this.BookingService.cancelBookingInfo(bookingid).then(()=>{
          this.bookingData.message=this.bookingData.message.filter((d:any)=>d.id!==bookingid)
      })
   

    }
  
}
