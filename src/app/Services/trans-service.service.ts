import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransServiceService {

  bookingUrl:any="http://13.126.57.93:8000/admin_app/booking_list/"
  bookingcancelUrl:any="http://13.126.57.93:8000/admin_app/booking_cancel/"

  transUrl:any="http://13.126.57.93:8000/admin_app/transaction_list/"

      
  ownerid:any=localStorage.getItem('ownerid')
  ownertoken:any=localStorage.getItem('ownertoken')

  constructor(private http: HttpClient) { }

  getTransDetails(){

    const headers = new HttpHeaders({     
      'Authorization': `token ${this.ownertoken}`      
  }) 

  
    return this.http.get<any>(this.transUrl, {headers})
  }


  // booking management
  getBookingDetails(){
    const headers = new HttpHeaders({     
      'Authorization': `token ${this.ownertoken}`      
  }) 

    return this.http.get<any>(this.bookingUrl, {headers})
  }

  cancelBookingInfo(bookingidinfo:any){

    const headers = new HttpHeaders({     
      'Authorization': `token ${this.ownertoken}`      
  }) 

     return this.http.delete(this.bookingcancelUrl + bookingidinfo +'/', {headers}).toPromise()
  }

}
