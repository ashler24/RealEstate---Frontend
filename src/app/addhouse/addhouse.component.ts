import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhouse',
  templateUrl: './addhouse.component.html',
  styleUrls: ['./addhouse.component.css']
})
export class AddhouseComponent implements OnInit {
  flats:any;
  users:any;
  usr:object;

  constructor(public service: DataService, public router: Router) { }

  ngOnInit() 
  {
    this.users = {
                    "id": "",
                    "email": "",
                    "mobile": "",
                    "name": "",
                    "password": "",
                    "role": ""
                 }
  }

  AddNewHouse(houseForm)
  { 
    let houseData = houseForm.form.value;
    console.log(houseData)
    alert("Confirm...?")

    this.usr = JSON.parse(window.sessionStorage.getItem('userSession'));
    console.log(this.usr["id"]);

    let observableResult = this.service.AddNewHouse(this.usr["id"] , houseData);

    observableResult.subscribe((result)=>
    {
      console.log(result);
      this.flats = result;
    })

    this.router.navigate(['/owner/showhouse'])

  }

}
