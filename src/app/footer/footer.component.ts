import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  getlocasrorage:any=localStorage.getItem('usertype')
  data:any
  
  constructor(){
    if (this.getlocasrorage) {
      this.data=this.getlocasrorage
      console.log(this.data)
    }

  }
 


}
