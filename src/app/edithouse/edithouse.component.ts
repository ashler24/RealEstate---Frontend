import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edithouse',
  templateUrl: './edithouse.component.html',
  styleUrls: ['./edithouse.component.css']
})
export class EdithouseComponent implements OnInit {


  house: any;
  houseid: any;
  constructor(private route: ActivatedRoute, private service: DataService, private router: Router) {
    this.houseid = { "id": "" }
    this.house = {
      "houseId": "",
      "houseName": "",
      "houseDescription": "",
      "petsAllowed": "",
      "status": "",
      "ownerName": "",
      "houseNumber": "",
      "city": "",
      "garden": "",
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
      let houseId = result.get("houseId");
      console.log(houseId);

      let observableResult = this.service.GetHouseById(houseId)

      observableResult.subscribe((result) => {
        this.house = result;
        console.log(this.house);
        this.houseid.id = this.house.houseId;
      })
    })
  }

  EditHouse(houseForm) {

    this.house = houseForm.form.value;
    console.log(this.house)
    console.log(this.houseid.id);

    let observableResult = this.service.EditHouse(this.houseid.id, this.house)
    // this.service.EditHouse(this.houseid.id, this.house);
    observableResult.subscribe((result) => {
      this.house = result;
      console.log(this.house);
      this.router.navigate(['/owner/showhouse'])
    })

  }

}
