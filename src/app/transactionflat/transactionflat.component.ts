import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-transactionflat',
  templateUrl: './transactionflat.component.html',
  styleUrls: ['./transactionflat.component.css']
})
export class TransactionflatComponent implements OnInit {

 
  flat = { "id": "" }
  flatList: any;
  user: object;
  myDate = new Date();
  transactionflat: any;
  invoiceNo = Math.floor((Math.random() * 100) + 4538126);
  email : any;

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

    this.transactionflat = 
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
      this.flat.id = result.get("flatId")
     
     
      this.user = JSON.parse(window.sessionStorage.getItem("userSession"))
      console.log(this.user)
      let observableResult = this.service.GetFlatById(this.flat.id);
      observableResult.subscribe((result) => {
        console.log(result)
        this.flatList = result;
        console.log(this.flatList.associatedUser.id)
      })
    })
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  TransferInfo(flatId,price,apartmentName)
  {
    this.transactionflat.estateId = flatId;
    this.transactionflat.buyerId = this.user;
    this.transactionflat.buyer = this.transactionflat.buyerId.name;
    this.transactionflat.ownerId = this.flatList.associatedUser;
    this.transactionflat.paymentAmount = price;
    this.transactionflat.billingDate = this.myDate;
    this.transactionflat.estateType = this.flatList.estateType;
    this.transactionflat.estateName = apartmentName;

    console.log(this.transactionflat)

    let observableResult = this.service.AddFlatTransaction(this.transactionflat,this.transactionflat.buyerId.id,this.transactionflat.ownerId.id)
    observableResult.subscribe((result) => {
      console.log(result)
     
    })

    observableResult = this.service.ChangeFlatStaus(this.flat.id)//to change flat status
    observableResult.subscribe((result) => {
      console.log(result)
    })

    this.email.destEmail = this.transactionflat.buyerId.email
    this.email.message = JSON.stringify(this.transactionflat)
    this.email.subject = "Flat Purchased"
    console.log(this.email)

    observableResult = this.service.SendFlatMail(this.email)
    observableResult.subscribe((result) => {
      console.log(result)
    })
    this.router.navigate(['/home/transaction'])
  }
}
