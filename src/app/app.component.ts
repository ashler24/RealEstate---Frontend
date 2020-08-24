import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';

  constructor(public service: AuthService)
  {
    console.log("App Component Created");
  }

  ngOnInit(){
    document.body.classList.add('image')
    //document.getElementById("myDivId").setAttribute("style","opacity:0.5; -moz-opacity:0.5; filter:alpha(opacity=50)");
  }

  signout()
  {
    this.service.onLogout();
  }
}
