import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TurfownerpageService } from 'src/app/Services/turfownerpage.service';
import { Router } from '@angular/router';






@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.css'],
  providers:[TurfownerpageService]
})
export class OwnerHomeComponent implements OnInit{



  ownerturData:any
  allamenityDatafromadmin:any
  // turfcreatingtimeslectedamenity:any;
  selectedamenitywhilecreatingturf:any=[]
  uploadImage:any
  turfcreateForm=new FormGroup({
    name: new FormControl('',[Validators.required]),
    location: new FormControl('',[Validators.required]),
    price: new FormControl('', Validators.required),
    image: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required])
    
  })

  turfdata:any = {
    amenity:[],
    name:'',
    location:'',
    price:'',
    description:'',
    image:'',
    longitude:'24',
    latitude:'75'                
  
  }

   //turfcreation
   test(e:any,pk:any){
    let num =  parseInt(pk)
    if(e.target.checked==true){
     
         this.turfdata.amenity.push(num)
         console.log(this.turfdata.amenity)
    }else{
      this.turfdata.amenity=this.turfdata.amenity.filter((d:any)=>d!==num)
      console.log(this.turfdata.amenity)
    }
  }



  upload(e:any){
    this.uploadImage=<File>e.target.files[0]

    
    // let test=new FormData();
    // test.append('image',this.uploadImage)
    // console.log(test);
    // this.turfdata.image=test
    // this.turfdata.image=this.uploadImage;
    // console.log(this.turfdata.image)



    console.log(this.uploadImage);
    
    
    
 }



  onSubmit(){
    if (this.turfcreateForm.valid) {   

    
      //  console.log(this.turfdata)
      
        const formData=new FormData();
      //   this.turfdata.image= formData.append('image', this.uploadImage)
      //   console.log(this.turfdata.image)
      //   if(this.turfdata.image=== formData.append('image', this.uploadImage) ){
      //     this.TurfOwnersService.creteturf(this.turfdata)
      //   } else {
      //     alert("failed")
      //   }

        formData.append('name', this.turfdata.name);
        formData.append('location', this.turfdata.location);
        formData.append('price', this.turfdata.price)
        formData.append('description', this.turfdata.description);
        formData.append('image', this.uploadImage)
        formData.append('amenity', this.turfdata.amenity );
        formData.append('longitude', this.turfdata.longitude)
        formData.append('latitude', this.turfdata.latitude)

        console.log(this.turfdata)
      
       console.log(typeof this.turfdata.amenity )
        this.TurfOwnersService.creteturf(formData)
       
 
        // this.turfcreateForm.reset()
      

   
    }
    else{
      alert("failed")
    }
  }
  
  //checking amenity filter
  // eachturf=[
  //   {
  //     amenity:[1,2],
  //     price:200,
  //     name:'anfield',


  //   }
  // ]


  // allamenity:any=[
  //   {
  //     id:1,
  //     name:"shower"
  //   },
  //   {
  //     id:2,
  //     name:"bath"
  //   },
  //   {
  //     id:3,
  //     name:"play"
  //   }

  // ]
 

  constructor(private TurfOwnersService:TurfownerpageService, private route:Router){ 
  
   }

  ngOnInit(): void {
    this.getTurf() 
    this.getamenityDetails()

      // console.log(this.turfcreatingtimeslectedamenity= this.allamenityData.filter((d:any)=>this.eachturf[0].amenity.includes(d.id))   )
    
}




 
// //map
//   display:any;
//   center:google.maps.LatLngLiteral = {lat:11.258753, lng:75.780411}
//   zoom=4;
//   markerOptions:google.maps.MarkerOptions={draggable: false}
//   markerPositions:google.maps.LatLngLiteral[]=[]
  
//   moveMap(event:google.maps.MapMouseEvent){
//     if(event.latLng!=null){
//     // this.center = (event.latLng.toJSON());
//     console.log(this.center)
//     this.markerPositions.push(event.latLng.toJSON())
//         if(this.markerPositions.length===2){
//             this.markerPositions=this.markerPositions.filter((ele:any)=>ele===this.markerPositions[1])
//             console.log(this.markerPositions)
//         }

//         const geocoder = new google.maps.Geocoder();
//         geocoder.geocode({location:this.center}, (results,status)=>{
//           if (status==='OK') {
//             if (results) {
//               console.log('Address: ', results[0].formatted_address)
              
//             }else{

//             }
            
//           } else {
            
//           }
//         })
//     }

//   }

  //getlocation




  // move(event:google.maps.MapMouseEvent){
  //   if(event.latLng!=null){
  //   this.display = event.latLng.toJSON()
   
 
  //   }
  // }
  // Map location suggestion
  onInputChange(event:any | null){
    if (event.target.value!=='') {
     
      console.log(event.target.value)
      // this.autocompleteService.getPlacePredictions({input:event.target.value})
    } else {
      
    }

  }
  //current location
  currentLocation(){

  }

  
  //mapend
 

  getamenityDetails(){
    this.TurfOwnersService.getAmenity().subscribe((d:any)=>{
    this.allamenityDatafromadmin=d
    console.log(this.allamenityDatafromadmin)
    }
    )

  }  
 

  getTurf(){
    this.TurfOwnersService.getownerTurfs().subscribe((d:any)=>{
      this.ownerturData=d
      console.log(this.ownerturData)
    })
  }

 

 

  turfdet(id:any){
    alert(id)
    localStorage.setItem("turfid", id)
    this.route.navigate(['owner/turfdetails/'+id])
    
  }

  singleOwnerDetails(ownerId:any){
    this.route.navigate(['admin/turf/ownerddetail/'+ownerId])
}

logout(){
  localStorage.clear()
  this.route.navigateByUrl('/home')
}



}




// formData

// onSubmit() {
//   if (this.turfcreateForm.valid) {
//     const formData = new FormData();

//     // Capture the selected amenities
//     const selectedAmenities = [];
//     // Adjust as per your checkbox structure or selected logic
//     if (/* Checkbox for Wifi is checked */) {
//       selectedAmenities.push('Wifi');
//     }
//     // ... Repeat for other amenities

//     // Prepare turf details object
//     formData.append('amenity', JSON.stringify(selectedAmenities));
//     formData.append('name', this.turfdetails.name);
//     formData.append('location', this.turfdetails.location);
//     formData.append('price', this.turfdetails.price);

//     // Check if an image file is selected
//     const imageFile = this.turfcreateForm.get('Image')?.value;
//     if (imageFile) {
//       formData.append('image', imageFile, imageFile.name);
//     } else {
//       // Handle if no image is selected
//     }

//     // Submit turf details using FormData
//     this.TurfOwnersService.createTurf(formData)
//       .then(() => {
//         // Handle success
//       })
//       .catch((error: any) => {
//         console.error('Error creating turf:', error);
//       });
//   } else {
//     alert('Failed: Please fill in required fields.');
//   }
// }

