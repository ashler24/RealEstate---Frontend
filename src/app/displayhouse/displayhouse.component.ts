import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-displayhouse',
  templateUrl: './displayhouse.component.html',
  styleUrls: ['./displayhouse.component.css']
})
export class DisplayhouseComponent implements OnInit {

  house = {"id": ""}
  houseList: any;
  user:any;

  constructor(private route: ActivatedRoute, private service: DataService, private router: Router) {
    this.houseList = {
      "houseId": "",
      "houseName": "",
      "houseDescription": "",
      "petsAllowed": "",
      "status": "",
      "ownerName": "",
      "houseNumber": "",
      "garden": "",
      "city": "",
      "state": "",
      "address": "",
      "floorSpace": "",
      "price": "",
      "numberOfBalconies": "",
      "numberOfBedrooms": "",
      "numberOfBathrooms": "",
      "numberOfFloors": "",
      "associatedUser": {
        "id": "",
        "name": "",
        "email": "",
        "password": "",
        "mobile": "",
        "userRole": ""
      },
      "listDate": "",
      "estateType": ""
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe((result) => {
      let id = result.get("houseId");
      this.house.id = id;
      console.log(id);

      let observableResult = this.service.GetHouseById(this.house.id);


      observableResult.subscribe((result) => {

        console.log("Service has returned successfully");
        console.log(result);
        this.houseList = result;
        console.log(this.houseList)
      });
    });
  }

  IsLoggedIn(houseId) {
    if (sessionStorage['login_status'] == '1')
      this.router.navigate(['/home/transactionhouse/'+houseId]);
    else
      this.router.navigate(['/home/login'])
  }

  IsAdmin()
  {
    console.log("Inside is admin method")
    this.user = JSON.parse(window.sessionStorage.getItem('userSession'));
    if(this.user != null){
        if(this.user.role == "ADMIN")
        {
          return true;
        }
    }
    else{return false;}     
  }

}
