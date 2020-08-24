import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminshowhouse',
  templateUrl: './adminshowhouse.component.html',
  styleUrls: ['./adminshowhouse.component.css']
})
export class AdminshowhouseComponent implements OnInit {

  houseList : any;

  constructor(public service: DataService, public router: Router) { }

  ngOnInit() {
    let observableResult = this.service.showHouses()
  
       observableResult.subscribe((result) =>
       {
           console.log(result)
           this.houseList = result;
       })
  }

}
