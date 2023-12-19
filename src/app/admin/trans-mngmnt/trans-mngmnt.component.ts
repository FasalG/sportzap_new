import { Component} from '@angular/core';
import { TransServiceService } from 'src/app/Services/trans-service.service';

@Component({
  selector: 'app-trans-mngmnt',
  templateUrl: './trans-mngmnt.component.html',
  styleUrls: ['./trans-mngmnt.component.css'],
  providers:[TransServiceService]
})
export class TransMngmntComponent {

  transData:any

  constructor(private transService:TransServiceService){
    this.transService.getTransDetails().subscribe((d:any)=>{
        this.transData=d
        console.log(this.transData)
    })
  }

}
