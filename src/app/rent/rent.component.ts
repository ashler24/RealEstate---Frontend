import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  flatList: any;
  constructor(public service: DataService, public router: Router) { }

  ngOnInit() {
    let observableResult = this.service.showFlats();
    observableResult.subscribe((result) => {
      console.log(result)
      this.flatList = result;

    })
  }


 
}

