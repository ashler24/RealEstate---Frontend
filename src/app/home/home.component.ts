import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email:any;

  constructor(public service:AuthService,private router: Router) {
    console.log("Home Component Created");
   }

  ngOnInit() {

    this.email=localStorage['email'];
    console.log('email: ', this.email);
  }




  IsLoggedIn() {
    if (sessionStorage['login_status'] == '1')
      return true;
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
