import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regUser: any;

  constructor(public service:DataService, public router:Router) { }

  ngOnInit() {
  }

  RegisterUser(resgisterForm)
  { 
    let regData = resgisterForm.form.value;
    console.log(regData);

    let observableResult = this.service.RegisterUser(regData);

    observableResult.subscribe((result)=>{
      console.log(result);
      this.regUser = result;
    })
    alert("Conifrm...?")
    this.router.navigate([''])
  }
}
