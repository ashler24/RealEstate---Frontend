import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  houseList : any;

  constructor(public service: DataService, public router: Router) { }

  ngOnInit() {
      let observableResult = this.service.showHouses();
      observableResult.subscribe((result)=>{
        console.log(result)
        this.houseList = result;
      })
  }


  CheckStatus()
  {
    if(this.houseList.status=="Not Available")
      return false;
  }

}
