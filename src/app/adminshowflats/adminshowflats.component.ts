import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminshowflats',
  templateUrl: './adminshowflats.component.html',
  styleUrls: ['./adminshowflats.component.css']
})
export class AdminshowflatsComponent implements OnInit {

  flatList:any
  constructor(public service:DataService , public router:Router) { }

  ngOnInit() {
    let observableResult = this.service.showFlats();

    observableResult.subscribe((result) =>
    {
        console.log(result)
        this.flatList = result;
    })
  }

}
