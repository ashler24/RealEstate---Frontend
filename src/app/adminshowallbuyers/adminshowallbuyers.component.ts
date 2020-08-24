import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminshowallbuyers',
  templateUrl: './adminshowallbuyers.component.html',
  styleUrls: ['./adminshowallbuyers.component.css']
})
export class AdminshowallbuyersComponent implements OnInit {

  buyerList: any;

  constructor(public service: DataService, public router: Router) { }

  ngOnInit() {
    let observableResult = this.service.GetBuyers();
    observableResult.subscribe((result) => {
      console.log(result)
      this.buyerList = result;
    })
  }

}
