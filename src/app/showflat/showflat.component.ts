import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showflat',
  templateUrl: './showflat.component.html',
  styleUrls: ['./showflat.component.css']
})
export class ShowflatComponent implements OnInit {

  flatList: any;
  users: object;

  constructor(public service: DataService, public router: Router) {

  }
  ngOnInit() {

    this.users = JSON.parse(window.sessionStorage.getItem("userSession"))
    console.log(this.users)
    let observableResult = this.service.OwnershowFlats(this.users["id"]);
    observableResult.subscribe((result) => {
      console.log(result)
      this.flatList = result;
    })
  }

  DeleteFlat(flatid) {
    let observableResult = this.service.DeleteFlatById(flatid);
    observableResult.subscribe((result) => {
      console.log(result);
      window.location.reload();
    })

  }
}
