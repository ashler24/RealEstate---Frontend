import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  city = {"cityName":""};

  constructor(public service: DataService, public router: Router) { }

  ngOnInit() 
  {
  
  }

  GetCity(mainForm)
  {
      console.log("In get City method")
      
      let cityForm = mainForm.form.value;
      this.city.cityName = cityForm.city;
      
      console.log(this.city.cityName)

      this.router.navigate(['/home/displayprop/'+this.city.cityName])

     
  }

}
