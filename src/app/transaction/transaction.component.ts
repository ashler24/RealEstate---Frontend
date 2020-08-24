import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  flat = { "id": "" }
  flatList: any;
  user: object;
  myDate = new Date();

  constructor(private router: Router, private service: DataService, private route: ActivatedRoute,private datePipe: DatePipe,private location: Location) {
    this.flatList = {
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

  ngOnInit() {
    // this.route.paramMap.subscribe((result) => {
    //   this.flat.id = result.get("flatId")
     
     
    //   this.user = JSON.parse(window.sessionStorage.getItem("userSession"))
    //   console.log(this.user)
    //   let observableResult = this.service.GetFlatById(this.flat.id);
    //   observableResult.subscribe((result) => {
    //     console.log(result)
    //     this.flatList = result;
    //     console.log(this.flatList.associatedUser.id)
    //   })
    // })
  }

  // cancel() {
  //   this.location.back(); // <-- go back to previous location on cancel
  // }

}
