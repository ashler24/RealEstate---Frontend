import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  users : any;
  editedUser : any;

  constructor(public service: DataService, public router: Router, public auth: AuthService  ) {
    this.users = {
      "id": "",
      "name": "",
      "email": "",
      "password": "",
      "role": "",
      "mobile": ""
    }

    // this.editedUser = {
    //   "id": "",
    //   "name": "",
    //   "email": "",
    //   "password": "",
    //   "role": "",
    //   "mobile": ""
    // }
   }

  ngOnInit() {

      this.users = JSON.parse(window.sessionStorage.getItem("userSession"))
      console.log(this.users);
  }

  EditDetails(editData)
  { 
    //this.editedUser = editData.form.value
    let formData = editData.form.value
    
    console.log(formData);
    let observableResult = this.service.EditDetails(this.users.id,formData)
    observableResult.subscribe((result) => {
      console.log(result)
    })
    this.auth.onLogout()
    //this.router.navigate(['/home/login'])
  }
}
