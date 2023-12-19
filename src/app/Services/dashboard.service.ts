import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  incomeURL:any="http://13.126.57.93:8000/admin_income/"

  constructor(private http:HttpClient) { }

  ownerid:any=localStorage.getItem('ownerid')
  ownertoken:any=localStorage.getItem('ownertoken')

  getIncome(){

    const headers = new HttpHeaders({     
      'Authorization': `token ${this.ownertoken}`      
  }) 

    return this.http.get<any>(this.incomeURL, {headers})
  }

  filterIncom(data:any){
      this.http.post<any>(this.incomeURL,data).subscribe((response)=>{console.log(response)})
  }
}
