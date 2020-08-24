import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-displayflat',
  templateUrl: './displayflat.component.html',
  styleUrls: ['./displayflat.component.css']
})
export class DisplayflatComponent implements OnInit {

  flat = {"id": ""}
  flatList : any;
  user:any;

  constructor(private route: ActivatedRoute, private service: DataService,private router: Router) {
    console.log("in ")
    this.flatList = {
      "flatId": "",
      "apartmentName": "",
      "flatDescription": "",
      "petsAllowed": "",
      "status": "",
      "ownerName": "",
      "flatNumber": "",
      "city": "",
      "state": "",
      "address": "",
      "floorSpace": "",
      "price":"",
      "numberOfBalconies": "",
      "numberOfBedrooms": "",
      "numberOfBathrooms": "",
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

  ngOnInit() 
  {
    this.route.paramMap.subscribe((result)=>{
      let id = result.get("flatId")
      this.flat.id = id;
      console.log(id)

    let observableResult = this.service.GetFlatById(this.flat.id);
    observableResult.subscribe((result) => {
      console.log(result)
      this.flatList = result;
      console.log(this.flatList.associatedUser.id)
    })
    })

   
  }

  IsLoggedIn(flatId) {
    if (sessionStorage['login_status'] == '1')
     this.router.navigate(['/home/transactionflat/'+flatId]);
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

  CheckStatus()
  {
    if(this.flatList.status=="Not Available")
      return false;
  }

}
