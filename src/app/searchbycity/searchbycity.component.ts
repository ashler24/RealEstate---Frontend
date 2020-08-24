import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-searchbycity',
  templateUrl: './searchbycity.component.html',
  styleUrls: ['./searchbycity.component.css']
})
export class SearchbycityComponent implements OnInit {

  flatList: any;
  houseList: any;
  constructor(private route: ActivatedRoute,private service:DataService, private router:Router){}


  ngOnInit() {

    this.route.paramMap.subscribe((result)=>{
      let cityName = result.get("cityName");
      console.log(cityName);

      let observableResult = this.service.GetAllFlatsByCity(cityName);

      observableResult.subscribe((result) =>{
      this.flatList = result;
      console.log(this.flatList);

      observableResult = this.service.GetAllHousesByCity(cityName);

      observableResult.subscribe((result)=>{
        this.houseList = result;
        console.log(this.houseList);
      })
    })
 })
  }

}
