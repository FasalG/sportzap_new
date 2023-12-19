import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   constructor(private toastrService: ToastrService) {}

   // Binding form data with loginform object
   signupform = new FormGroup({
    user:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    mobile:new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])  
    
  })

  signup(){
    if (this.signupform.valid) {
        
      //   // localStorage.setItem("userdetails",JSON.stringify(this.userData))
      //   let dem:any =localStorage.getItem("userdetails") || [];
      //   if (dem) {
      //     try {
      //       this.userData = dem? JSON.parse(dem) : []
      //     } catch (error) {
      //       console.error('Error parsing JSON:', error);
      //     }
      //   }
      //   console.log(this.userData); 
      // // this.userData.push(users)
      //   this.userData.push(this.signupform.value)
      //   // console.log(typeof this.signupform.value)
      //   localStorage.setItem("userdetails",JSON.stringify(this.userData))
      //   this.toastrService.success('Signup Successful!');
      // } 
      // else{
      //   this.toastrService.error('Signup Failed! Please check the form.');
      // }     
      
    }

  }
}
