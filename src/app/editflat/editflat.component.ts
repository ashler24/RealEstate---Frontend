import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editflat',
  templateUrl: './editflat.component.html',
  styleUrls: ['./editflat.component.css']
})
export class EditflatComponent implements OnInit {


  
  flat:any;
  flatid:any;
  constructor(private route: ActivatedRoute, private service: DataService, private router: Router) 
  {
    this.flatid={"id":""}
    this.flat = {
      "flatId": "",
      "apartmentName": "",
      "flatDescription": "",
      "petsAllowed": "",
      "status": "",
      "ownerName": "",
      "flatNumber": "",
      "city": "",
      "state": "",
      "address": "",
      "floorSpace": "",
      "price": "",
      "numberOfBalconies": "",
      "numberOfBedrooms": "",
      "numberOfBathrooms": "",
      "numberOfFloors": "",
      "associatedUser": {
        "id": "",
        "name": "",
        "email": "",
        "password": "",
        "mobile": "",
        "userRole": ""
      },
      "listDate": "",
      "estateType": ""
    }
  }

  ngOnInit()
  {
    this.route.paramMap.subscribe((result)=>
    {
       let flatId = result.get("flatId");
       console.log(flatId);

       let observableResult = this.service.GetFlatById(flatId);

       observableResult.subscribe((result)=>{
         this.flat = result;
         console.log(this.flat);
         this.flatid.id = this.flat.flatId;
       })
    })
  }
  EditFlat(flatForm)
  {
   
   this.flat = flatForm.form.value; 
   console.log(this.flat)
   console.log(this.flatid.id);

   let observableResult = this.service.EditFlat(this.flatid.id, this.flat);

   observableResult.subscribe((result) =>
   {
     this.flat = result;
     console.log(this.flat);
     this.router.navigate(['/owner/showflat'])
   })

  }
}
