import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message;
  users: any;
  // email = '';
  // password = '';

  constructor(private service: AuthService, private router: Router) {

    this.users = {
      "id": "",
      "name": "",
      "email": "",
      "password": "",
      "role": "",
      "mobile": ""
    }
  }

  ngOnInit() {
  }

  SignIn(loginForm) {
    let loginCredentials = loginForm.form.value;
    console.log(loginCredentials);



    let observableResult = (this.service.CheckCredentialsWithDB(loginCredentials))

    observableResult.subscribe((result) => {
      console.log(result);

      this.users.id = result["id"];
      this.users.name = result["name"];
      this.users.email = result["email"];
      this.users.password = result["password"];
      this.users.role = result["userRole"];
      this.users.mobile = result["mobile"];

      window.sessionStorage.setItem("userSession", JSON.stringify(this.users));

      if (result["userRole"] == "BUYER") {
        console.log("User Is Buyer");
        sessionStorage['login_status'] = '1';
        this.router.navigate(['/home/main'])

      }
      else if (result["userRole"] == "OWNER") {
        console.log("User Is Owner");
        sessionStorage['login_status'] = '1';
        this.router.navigate(['/owner/addflat'])
      }
      else if (result["userRole"] == "ADMIN") {
        console.log("User Is Admin");
        sessionStorage['login_status'] = '1';
        this.router.navigate(['/admin/adminshowflats'])
      }
      else {
        this.message = "User Name / Password is Invalid!";
      }
    })

  }


  SignUp() {
    console.log("in sign up of login")
    this.router.navigate(['/home/register']);
  }
}






  // onLogin() {

  //   if (this.email.length == 0) {
  //     alert('enter email');
  //   } else if (this.password.length ==0) {
  //     alert('enter password');
  //   } else {

  //     if(this.email=='Admin')
  //     {
  //         sessionStorage['login_status'] = '1';
  //         localStorage.setItem('email',this.email);
  //         localStorage.setItem('flag','true');
  //         this.router.navigate(['/admin/adminshowflats']);
  //     }
  //     else if(this.email=='Owner')
  //     {

  //         sessionStorage['login_status'] = '1';
  //         localStorage.setItem('email',this.email);
  //         localStorage.setItem('flag','true');
  //        // this.emtService.navBarSwitch(true);
  //         this.router.navigate(['/owner/addflat']);
  //     }else if(this.email=='Buyer')
  //     {
  //         sessionStorage['login_status'] = '1';
  //         localStorage.setItem('email',this.email);
  //         localStorage.setItem('flag','true');
  //        // this.emtService.navBarSwitch(true);
  //         this.router.navigate(['/home/main']);
  //     }else{
  //       alert("invalid login");
  //       this.router.navigate(['']);
  //     }

  //   }


  // SignIn(loginForm) {
  //   let loginCredentials = loginForm.form.value;
  //   console.log(loginCredentials);



  //  this.usr = JSON.parse(this.service.CheckCredentialsWithDB(loginCredentials))

  //   console.log(this.usr)
  //   if (this.usr == "BUYER") {
  //     console.log("User Is Buyer");

  //     this.router.navigate(['/home/main'])

  //   }
  //   else if (this.usr == "OWNER") {
  //     console.log("User Is Owner");

  //     this.router.navigate(['/owner/addflat'])
  //   }
  //   else if (this.usr == "ADMIN") {
  //     console.log("User Is Admin");

  //     this.router.navigate(['/admin/adminshowflats'])
  //   }
  //   else {
  //     this.message = "User Name / Password is Invalid!";
  //   }
  // }