import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-user-mngmnt',
  templateUrl: './user-mngmnt.component.html',
  styleUrls: ['./user-mngmnt.component.css'],
  providers:[UserServiceService]
})
export class UserMngmntComponent {

  usersData:any;

  constructor(private UserService:UserServiceService){
    this.getCustomerlist()  
  }
  
  getCustomerlist(){
    this.UserService.getUsers().subscribe((data:any)=>{
      this.usersData=data
      console.log(this.usersData)
    })
  }

  userDelete(userId:any){
   this.UserService.deleteUser(userId).then(()=>{
    this.usersData.message=this.usersData.message.filter((d:any)=>d.id !==userId)
   }).catch((error)=>{
    console.error("error deleting user",error)
   });
   ;
  }

}
