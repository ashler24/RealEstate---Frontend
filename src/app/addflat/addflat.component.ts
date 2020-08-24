import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addflat',
  templateUrl: './addflat.component.html',
  styleUrls: ['./addflat.component.css']
})
export class AddflatComponent implements OnInit {

  flat: any;
  users: any;
  usr: object;


  constructor(public service: DataService, public router: Router) {
    this.users = {
      "id": "",
      "email": "",
      "mobile": "",
      "name": "",
      "password": "",
      "role": ""
    }

  }

  ngOnInit() {

  }

  AddNewFlat(flatForm) {

    this.usr = JSON.parse(window.sessionStorage.getItem("userSession"))

    console.log(this.usr["id"]);

    let flatData = flatForm.form.value;
    console.log(flatData)
    confirm("Confirm...?")
    let observableResult = this.service.AddNewFlat(this.usr["id"], flatData);

    observableResult.subscribe((result) => {
      console.log(result);
      this.flat = result;
    })
   // this.router.navigate(['/owner/showflat'])

  }
}
