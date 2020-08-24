import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminaddcity',
  templateUrl: './adminaddcity.component.html',
  styleUrls: ['./adminaddcity.component.css']
})
export class AdminaddcityComponent implements OnInit {

  cityList: any;

  constructor(public service: DataService, public router: Router) { }

  ngOnInit() {
    let observableResult = this.service.GetAllCities()
    observableResult.subscribe((result) =>{
      this.cityList = result;
    })
  }


  AddCity(addcityForm)
  { 
    let cityData = addcityForm.form.value

    let observableResult = this.service.AddCity(cityData)
    observableResult.subscribe((result) =>{
      console.log(result)
    })

    window.location.reload();
  }
}
