import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from "../Services/auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class TurfownerpageService {

  turfdetailsURL:any="http://13.126.57.93:8000/owner/turf/"
  turfdeleteUrl:any="http://13.126.57.93:8000/owner/turf_management/"
  paymenthisatoryURL:any="http://13.126.57.93:8000/owner/payment/"
  amenityURL:any="http://13.126.57.93:8000/owner/amenity/"

  predictedbookingforeachturfURL:any="http://13.126.57.93:8000/admin_app/display_predicted_weekly_booking/"


  ownerid:any=localStorage.getItem('ownerid')
  ownertoken:any=localStorage.getItem('ownertoken')

  constructor(private http:HttpClient) {

  }

  getAmenity(){
    const headers = new HttpHeaders({     
      'Authorization': `token ${this.ownertoken}`      
  })   

   return this.http.get<any>(this.amenityURL, {headers})
  }

  getBookingprediction(turfid:any){

    const headers = new HttpHeaders({     
      'Authorization': `token ${this.ownertoken}`      
  })   



  return this.http.get<any>(this.predictedbookingforeachturfURL + turfid + '/',{headers} )
  }
 

  getownerTurfs(){

    const headers = new HttpHeaders({     
        'Authorization': `token ${this.ownertoken}`      
    })   

    return this.http.get<any>(this.turfdetailsURL +this.ownerid +'/',{headers})
    
  }

  getOwnerPaymentHistory(){
    const headers = new HttpHeaders({     
      'Authorization': `token ${this.ownertoken}`      
  })   

  return this.http.get<any>(this.paymenthisatoryURL+ this.ownerid + '/', {headers})
  }


  deleteownerTurf(id:any){

    const headers = new HttpHeaders({     
      'Authorization': `token ${this.ownertoken}`      
  })   

    return this.http.delete<any>(this.turfdeleteUrl+id+"/", {headers}).toPromise().then((d:any)=>{
      console.log(d)
    })
  }

  creteturf(turfdet:any){

    const headers = new HttpHeaders({     
      'Authorization': `token ${this.ownertoken}`      
  })   

    this.http.post<any>(this.turfdetailsURL + this.ownerid+'/', turfdet, {headers}).subscribe((response)=>{
      console.log('succes', response)
    
    })
  }
}
