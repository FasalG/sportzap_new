import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ownerService{
    turfOwnersUrl:any="http://13.126.57.93:8000/admin_app/owner_list/";
    deletOwnerUrl:any="http://13.126.57.93:8000/admin_app/owner_retrieve_delete/"


    
  ownerid:any=localStorage.getItem('ownerid')
  ownertoken:any=localStorage.getItem('ownertoken')



    constructor(private http: HttpClient) { }

    turfOwner() {
      const headers = new HttpHeaders({     
        'Authorization': `token ${this.ownertoken}`      
    }) 


        return this.http.get<any>(this.turfOwnersUrl, {headers});    
      }

      TurfOwnerdelete(ownerid:any){

        const headers = new HttpHeaders({     
          'Authorization': `token ${this.ownertoken}`      
      }) 
  

        return this.http.delete(this.deletOwnerUrl+ownerid+'/', {headers}).toPromise()
      }


}