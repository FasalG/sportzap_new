import { Component, OnInit } from '@angular/core';
import { TurfownerpageService } from 'src/app/Services/turfownerpage.service';

@Component({
  selector: 'app-ownerpaymenthistory',
  templateUrl: './ownerpaymenthistory.component.html',
  styleUrls: ['./ownerpaymenthistory.component.css']
})
export class OwnerpaymenthistoryComponent implements OnInit {

  constructor(private TurfOwnersService:TurfownerpageService ){}

  bookingData:any

  ngOnInit(): void {
    this.getPayment()
  }

  getPayment(){
    this.TurfOwnersService.getOwnerPaymentHistory().subscribe((d:any)=>{
      this.bookingData=d
      console.log(this.bookingData)
    }
    
    )
  }

}
