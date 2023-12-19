import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-partner-with-us',
  templateUrl: './partner-with-us.component.html',
  styleUrls: ['./partner-with-us.component.css'],
  providers:[AuthServiceService]

})
export class PartnerWithUsComponent {

  constructor(private AuthService:AuthServiceService,private toastrService: ToastrService){}

    // Binding form data with loginform object
    signupform = new FormGroup({
      user:new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      mobile:new FormControl('',[Validators.required]),
      organization:new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])  
      
    })

  turfownerData = {
    abstract: {
      username: '',
      email: '',
      password: '',
      phone_no: '',
      latitude: null,
      longitude: null,
      usertype: 'owner'
    },
    Organization_name: ''
  };

  onSubmit(){
    if(this.signupform.valid){
      this.AuthService.turfownerRegister(this.turfownerData)
    }
    else{
      this.toastrService.error('Signup Failed! Please check the form.');
    }  
  
  }

  get user (){
    return this.signupform.get('user')
  }

  get email(){
    return this.signupform.get('email')
  }
  get organization(){
    return this.signupform.get('organization')
  }
  get mobile(){
    return this.signupform.get('mobile')
  }
  get password(){
    return this.signupform.get('password')
  }
}
