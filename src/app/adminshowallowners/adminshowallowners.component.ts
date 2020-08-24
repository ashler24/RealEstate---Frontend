import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminshowallowners',
  templateUrl: './adminshowallowners.component.html',
  styleUrls: ['./adminshowallowners.component.css']
})
export class AdminshowallownersComponent implements OnInit {

  ownerList: any;

  constructor(public service: DataService, public router: Router) { }

  ngOnInit() {
    let observableResult = this.service.GetOwners();
    observableResult.subscribe((result) => {
      console.log(result)
      this.ownerList = result;
    })
  }

  deleteOwner(ownerId)
  { 
    console.log(ownerId)
  }
}
