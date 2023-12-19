import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  ownerid:any;
  ownertoken:any

  usersUrl:any="http://13.126.57.93:8000/owner/register/"

  turfownerloginUrl:any="http://13.126.57.93:8000/login/"

  constructor(private http:HttpClient, private toastrService: ToastrService, private router:Router) { }

  turfownerRegister(turfownerdata:any){
    this.http.post<any>(this.usersUrl,turfownerdata).subscribe(
      (response) => {
        console.log('Registration successful!', response);
        this.toastrService.success('Signup Successful!');
      },
      (error) => {
        console.error('Registration failed!', error);
        this.toastrService.error('Signup Failed! Please check the form.');
      }
    )   
  }

  loginownertoken:any

  turfownerLogin(ownerloginData:any){

    this.http.post<any>(this.turfownerloginUrl,ownerloginData).subscribe(
      (response)=>{ 
        console.log('Login successful!', response)
        this.loginownertoken=response
        console.log(response.user_type)
        if (response.user_type==='owner') {
          localStorage.setItem('ownerid',response.user_id) 
          localStorage.setItem('ownertoken', response.token)     
          localStorage.setItem('usertype', response.user_type)  
          localStorage.setItem('IsAdmin', response.is_admin)
          
          this.router.navigateByUrl('/owner')          
              
        }
        else if(response.user_type==='customer'){
          if(response.is_admin){
            localStorage.setItem('ownerid',response.user_id) 
            localStorage.setItem('ownertoken', response.token)     
            localStorage.setItem('usertype', response.user_type)  
            localStorage.setItem('IsAdmin', response.is_admin)

            this.router.navigateByUrl('/admin')
            
          }
          else{
            localStorage.setItem('ownerid',response.user_id) 
            localStorage.setItem('ownertoken', response.token)     
            localStorage.setItem('usertype', response.user_type)  
        
            this.router.navigateByUrl('/home')
           
          }
       
        }
        else{

          this.router.navigateByUrl('/home')
        }
        
      },
      (error)=>{
        console.error('Login failed!', error);
        this.toastrService.error('Login Failed! Please check username and password.');
      }
    )
    
  }


}
