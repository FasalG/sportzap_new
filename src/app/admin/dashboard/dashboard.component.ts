import { AfterViewInit, Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { DashboardService } from "../../Services/dashboard.service";
import { UserServiceService } from "../../Services/user-service.service";
import { TransServiceService } from "../../Services/trans-service.service";




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DashboardService,UserServiceService,TransServiceService]
})

export class DashboardComponent implements AfterViewInit {
  bookingData:any;
  transData:any
  customercount:any;
  income:any
  date={
    start_date:'',
    end_date:''
  }
  

  constructor(private dasboardservice:DashboardService,private UserService:UserServiceService, private bookingservice:TransServiceService){
    this.getIncomedetails()
    this.customertCount()
    this.recentbooking()
  }
  
  ngAfterViewInit() {
    this.createLineChart();
    this.createRadarChart() ;
  }

  getIncomedetails(){
    this.dasboardservice.getIncome().subscribe((d:any)=>{
      console.log(d)
      this.income=d
      

    })
  }

  dateDetails(){
    this.dasboardservice.filterIncom(this.date)
  }

  // Customer list count
  customertCount(){
    this.UserService.getUsers().subscribe((d:any)=>
    this.customercount=d.message.length
    )
  }

//recent booking

recentbooking(){
  this.bookingservice.getBookingDetails().subscribe((d:any)=>{
    this.bookingData=d
  })
}

//transaction list
recenttransaction(){
  this.bookingservice.getTransDetails().subscribe((s:any)=>{
    this.transData=s
  })
}


































  //line chart booking report
  createLineChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Line 1',
          data: [10, 20, 5, 25, 18, 30, 22],
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: false
        }, {
          label: 'Line 2',
          data: [5, 15, 10, 20, 12, 25, 18],
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          fill: false
        }, {
          label: 'Line 3',
          data: [8, 18, 12, 22, 15, 28, 20],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


  // Radar chart budget report
  createRadarChart() {
    const ctx = document.getElementById('radarchart') as HTMLCanvasElement;
    const lineChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Line 1',
          data: [10, 20, 5, 25, 18, 30, 22],
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: false
        }, {
          label: 'Line 2',
          data: [5, 15, 10, 20, 12, 25, 18],
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          fill: false
        }, {
          label: 'Line 3',
          data: [8, 18, 12, 22, 15, 28, 20],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
  

