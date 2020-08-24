import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminshowtransaction',
  templateUrl: './adminshowtransaction.component.html',
  styleUrls: ['./adminshowtransaction.component.css']
})
export class AdminshowtransactionComponent implements OnInit {

  txList: any;
  myKeys : String[];
  

  constructor(public service: DataService, public router: Router) {
    this.txList = {
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
      "estateType": ""
    }

 
  }

  ngOnInit() {
    let observableResult = this.service.GetAllTx()
    observableResult.subscribe(result => {
      console.log(result)
      this.txList = result;
       this.myKeys = Object.keys(this.txList)
      console.log(this.txList)
    
    })
  }

}
