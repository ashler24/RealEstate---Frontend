// import { Injectable } from '@angular/core';
// import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
// import { DataService } from './data.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService implements CanActivate {
//   users: any;
//   credentials = { "email": "", "password": "" };


//   constructor(private router: Router, private service: DataService) {
//     this.users = {
//       "id": "",
//       "email": "",
//       "mobile": "",
//       "name": "",
//       "password": "",
//       "role": ""
//     }
//   }


//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     if (this.IsLoggedIn()) {
//       console.log("User Has Logged in");
//       return true;
//     }
//     else {
//       console.log("User Has not Logged in");
//       this.router.navigate(['/login']);
//       return false;
//     }

//   }

//   IsLoggedIn() {

//     if (window.sessionStorage.getItem("isActive") != null
//       &&
//       window.sessionStorage.getItem("isActive") == "1") {

//       return true;
//     }
//     else {
//       return false;
//     }
//   }

//   CheckCredentialsWithDB(pcredentials) {
//     this.credentials.email = pcredentials.Email;
//     this.credentials.password = pcredentials.Password;
//     console.log(this.credentials)
//     let observableResult = this.service.LoginFromBackend(this.credentials);
//     observableResult.subscribe((result) => {
//       console.log(result);
//       this.users.id = result["id"];
//       this.users.email = result["email"];
//       this.users.mobile = result["mobile"];
//       this.users.name = result["name"];
//       this.users.password = result["password"];
//       this.users.role = result["userRole"];

//     });
//     console.log(this.users)





//     if (this.credentials.email == this.users.email && this.credentials.password == this.users.password) {
//       window.sessionStorage.setItem("isActive", "1");
//       window.sessionStorage.setItem("userSession", JSON.stringify(this.users));

//       return true;
//     }
//     else {
//       return false;
//     }
//   }


//   IsAdmin() {
//     if (this.users.role == "ADMIN") {
//       console.log("ADMIN")
//       return true;
//     }
//   }

//   IsOwner() {
//     if (this.users.role == "OWNER") {
//       console.log("OWNER")

//       return true;
//     }
//   }

//   IsBuyer() {
//     if (this.users.role == "BUYER") {
//       console.log("BUYER")

//       return true;
//     }
//   }

// Logout() {
//   window.sessionStorage.setItem("isActive", "0");
//   window.sessionStorage.setItem("userSession", "0");
//   this.router.navigate(['/login']);
// }

// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable()
export class AuthService implements CanActivate {

  flag: boolean = false;
  users: any;
  credentials = { "email": "", "password": "" };

  constructor(
    private router: Router,
    private http: HttpClient, private service: DataService) {
    this.users = {
      "id": "",
      "name": "",
      "email": "",
      "password": "",
      "role": "",
      "mobile": ""
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // check if user has logged in
    if (sessionStorage['login_status'] == '1') {
      console.log("ffff");
      //   this.flag=true;
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  CheckCredentialsWithDB(pcredentials) {
    this.credentials.email = pcredentials.Email;
    this.credentials.password = pcredentials.Password;
    console.log(this.credentials)
   
    return  this.service.LoginFromBackend(this.credentials);
  }

  onLogout() {
    if (sessionStorage['login_status'] == '1') {
      const result = confirm('Are you sure you want to logout?');
      if (result) {
        sessionStorage['login_status'] = '0';
        window.sessionStorage.setItem("userSession", "0");
      
        localStorage.removeItem('email');
        localStorage.clear();
        //this.emservice.navBarSwitch(false);
        this.router.navigate(['']);
      }
    } else {
      alert('are you kidding me? first login..');
    }
  }

}


// CheckCredentialsWithDB(pcredentials) {
//   this.credentials.email = pcredentials.Email;
//   this.credentials.password = pcredentials.Password;
//   console.log(this.credentials)
//   let observableResult = this.service.LoginFromBackend(this.credentials);
//   observableResult.subscribe((result) => {
//     console.log(result);
//     this.users.id = result["id"];
//     this.users.name = result["name"];
//     this.users.email = result["email"];
//     this.users.password = result["password"];
//     this.users.role = result["userRole"];
//     this.users.mobile = result["mobile"];
   
    
//     sessionStorage['user_id'] = result["id"];




//   });
//   console.log(this.users)


 
//   window.sessionStorage.setItem("userSession", JSON.stringify(this.users));
//   sessionStorage['login_status'] = '1';

//   return JSON.stringify(this.users.role);
// }