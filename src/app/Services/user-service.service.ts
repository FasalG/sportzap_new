import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UserServiceService {

  constructor(private http: HttpClient) { }

  usersUrl:any="http://13.126.57.93:8000/admin_app/customer_list/"
  deleteuserUrl:any="http://13.126.57.93:8000/admin_app/customer_retrieve_delete/"

  ownerid:any=localStorage.getItem('ownerid')
  ownertoken:any=localStorage.getItem('ownertoken')


  getUsers(){
    const headers = new HttpHeaders({     
      'Authorization': `token ${this.ownertoken}`      
  }) 

    return this.http.get<any>(this.usersUrl, {headers})
  }

  deleteUser(itemId: any){

    const headers = new HttpHeaders({     
      'Authorization': `token ${this.ownertoken}`      
  }) 

    return this.http.delete(this.deleteuserUrl+itemId + '/', {headers}).toPromise()
    
  }
}


