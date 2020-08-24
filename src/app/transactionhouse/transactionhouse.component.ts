import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-transactionhouse',
  templateUrl: './transactionhouse.component.html',
  styleUrls: ['./transactionhouse.component.css']
})
export class TransactionhouseComponent implements OnInit {

  house = { "id": "" }
  houseList: any;
  user: object;
  myDate = new Date();
  transactionhouse : any;
  invoiceNo = Math.floor((Math.random() * 100) + 554564);
  email : any;

  constructor(private router: Router, private service: DataService, private route: ActivatedRoute,private datePipe: DatePipe,private location: Location) {
    this.houseList = {
      "houseId": "",
      "houseName": "",
      "houseDescription": "",
      "petsAllowed": "",
      "status": "",
      "ownerName": "",
      "houseNumber": "",
      "garden": "",
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

    this.transactionhouse = 
    {
        "txId": "",
        "buyer": "",
        "estateId": "",
        "ownerId": {
            "id": "",
            "name": "",
            "email": "",
            "password": "",
            "mobile": "",
            "userRole": ""
        },
        "buyerId": {
            "id": "",
            "name": "",
            "email": "",
            "password": "",
            "mobile": "",
            "userRole": ""
        },
        "paymentAmount": "",
        "billingDate": "",
        "estateType": "",
        "estateName": ""
    }
    this.email = {
      "destEmail" : " ",
      "message":"",
      "subject":""
    }
   }

  ngOnInit() {
    this.route.paramMap.subscribe((result) => {
      this.house.id = result.get("houseId")
     
     
      this.user = JSON.parse(window.sessionStorage.getItem("userSession"))
      console.log(this.user)
      let observableResult = this.service.GetHouseById(this.house.id);
      observableResult.subscribe((result) => {
        console.log(result)
        this.houseList = result;
        console.log(this.houseList.associatedUser.id)
      })
    })
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  TransferInfo(houseId,price,houseName)
  {
    this.transactionhouse.estateId = houseId;
    this.transactionhouse.buyerId = this.user;
    this.transactionhouse.buyer = this.transactionhouse.buyerId.name;
    this.transactionhouse.ownerId = this.houseList.associatedUser;
    this.transactionhouse.paymentAmount = price;
    this.transactionhouse.billingDate = this.myDate;
    this.transactionhouse.estateType = this.houseList.estateType;
    this.transactionhouse.estateName = houseName;

    console.log(this.transactionhouse)

    let observableResult = this.service.AddHouseTransaction(this.transactionhouse,this.transactionhouse.buyerId.id,this.transactionhouse.ownerId.id)
    observableResult.subscribe((result) => {
      console.log(result)
    
    })

    observableResult = this.service.ChangeHouseStatus(this.house.id)//to change house status
    observableResult.subscribe((result) => {
      console.log(result)
    })

    this.email.destEmail = this.transactionhouse.buyerId.email
    this.email.message = JSON.stringify(this.transactionhouse)
    this.email.subject = "House Purchased"
    console.log(this.email)

    observableResult = this.service.SendHouseMail(this.email)
    observableResult.subscribe((result) => {
      console.log(result)
    })

    this.router.navigate(['/home/transaction'])
  }
}
