import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showhouse',
  templateUrl: './showhouse.component.html',
  styleUrls: ['./showhouse.component.css']
})
export class ShowhouseComponent implements OnInit {

  houseList: any;
  users: object;

  constructor(public service: DataService, public router: Router) {

  }
  ngOnInit() {

    this.users = JSON.parse(window.sessionStorage.getItem("userSession"))
    console.log(this.users)
    let observableResult = this.service.OwnershowHouses(this.users["id"]);
    observableResult.subscribe((result) => {
      console.log(result)
      this.houseList = result;
    })
  }

  DeleteHouse(houseId) {
    let observableResult = this.service.DeleteHouseById(houseId);
    observableResult.subscribe((result) => {
      console.log(result);
      window.location.reload();
    })

  }
}
