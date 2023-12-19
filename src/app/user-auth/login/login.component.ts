import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthServiceService]
})
export class LoginComponent {

  constructor(private AutherService:AuthServiceService){}

  owner={
    username:'',
    password:''
  }

  onSubmit(){
    this.AutherService.turfownerLogin(this.owner)
    console.log(this.owner)
  }

 

}
