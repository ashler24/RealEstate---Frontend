import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel, FormsModule, NgForm } from '@angular/forms';

import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerComponent } from './owner/owner.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { RentComponent } from './rent/rent.component';
import { SellComponent } from './sell/sell.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { AddflatComponent } from './addflat/addflat.component';
import { AddhouseComponent } from './addhouse/addhouse.component';
import { ShowflatComponent } from './showflat/showflat.component';
import { ShowhouseComponent } from './showhouse/showhouse.component';
import { AdminComponent } from './admin/admin.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AdminshowflatsComponent } from './adminshowflats/adminshowflats.component';
import { AdminshowhouseComponent } from './adminshowhouse/adminshowhouse.component';
import { AdminshowallbuyersComponent } from './adminshowallbuyers/adminshowallbuyers.component';
import { AdminshowallownersComponent } from './adminshowallowners/adminshowallowners.component';
import { DisplayhouseComponent } from './displayhouse/displayhouse.component';
import { MainComponent } from './main/main.component';
import { DisplayflatComponent } from './displayflat/displayflat.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DatePipe } from '@angular/common';
import { EditflatComponent } from './editflat/editflat.component';
import { EdithouseComponent } from './edithouse/edithouse.component';
import { TransactionflatComponent } from './transactionflat/transactionflat.component';
import { TransactionhouseComponent } from './transactionhouse/transactionhouse.component';
import { AdminshowtransactionComponent } from './adminshowtransaction/adminshowtransaction.component';
import { SearchbycityComponent } from './searchbycity/searchbycity.component';
import { AdminaddcityComponent } from './adminaddcity/adminaddcity.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerComponent,
    LoginComponent,
    HomeComponent,
    BuyComponent,
    RentComponent,
    SellComponent,
    AboutusComponent,
    ContactComponent,
    NotfoundComponent,
    RegisterComponent,
    AddflatComponent,
    AddhouseComponent,
    ShowflatComponent,
    ShowhouseComponent,
    AdminComponent,
    EditprofileComponent,
    AdminshowflatsComponent,
    AdminshowhouseComponent,
    AdminshowallbuyersComponent,
    AdminshowallownersComponent,
    DisplayhouseComponent,
    MainComponent,
    DisplayflatComponent,
    TransactionComponent,
    EditflatComponent,
    EdithouseComponent,
    TransactionflatComponent,
    TransactionhouseComponent,
    AdminshowtransactionComponent,
    SearchbycityComponent,
    AdminaddcityComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // RouterModule.forRoot([
    //   { path: "", component: LoginComponent, canActivate: [AuthService] },
    //   { path: "login", component: LoginComponent },
    //   { path: "editprofile", component: EditprofileComponent },
    //   { path: "admin", component: AdminComponent },
    //   { path: "adminshowflats", component: AdminshowflatsComponent },
    //   { path: "adminshowhouse", component: AdminshowhouseComponent },
    //   { path: "adminshowallbuyers", component: AdminshowallbuyersComponent },
    //   { path: "adminshowallowners", component: AdminshowallownersComponent },

    //   { path: "register", component: RegisterComponent },
    //   { path: "home", component: HomeComponent, canActivate: [AuthService] },
    //   { path: "buy", component: BuyComponent, canActivate: [AuthService] },

    //   { path: "sell", component: SellComponent, canActivate: [AuthService] },
    //   { path: "addflat", component: AddflatComponent, canActivate: [AuthService] },
    //   { path: "addhouse", component: AddhouseComponent, canActivate: [AuthService] },
    //   { path: "showflat", component: ShowflatComponent, canActivate: [AuthService] },
    //   { path: "showhouse", component: ShowhouseComponent, canActivate: [AuthService] },
    //   { path: "displayhouse", component: DisplayhouseComponent, canActivate: [AuthService] },

    //   { path: "rent", component: RentComponent, canActivate: [AuthService] },
    //   { path: "aboutus", component: AboutusComponent },
    //   { path: "contact", component: ContactComponent },
    //   { path: "**", component: NotfoundComponent }


    // ])
    RouterModule.forRoot([
      { path: "", component: HomeComponent, children: [{ path: "", component: MainComponent }] },


      { path: "home", component: HomeComponent },
      { path: "home", component: HomeComponent, children: [{ path: "main", component: MainComponent }] },
      { path: "home", component: HomeComponent, children: [{ path: "login", component: LoginComponent }] },
      { path: "home", component: HomeComponent, children: [{ path: "register", component: RegisterComponent }] },
      { path: "home", component: HomeComponent, children: [{ path: "buy", component: BuyComponent }] },
      { path: "home", component: HomeComponent, children: [{ path: "displayhouse", component: DisplayhouseComponent }] },
      { path: "home", component: HomeComponent, children: [{ path: "rent", component: RentComponent }] },
      { path: "home", component: HomeComponent, children: [{ path: "displayflat/:flatId", component: DisplayflatComponent }] },
      { path: "home", component: HomeComponent, children: [{ path: "displayhouse/:houseId", component: DisplayhouseComponent }] },
      { path: "home", component: HomeComponent, children: [{ path: "editprofile", component: EditprofileComponent }] },
      { path: "home", component: HomeComponent, children: [{ path: "aboutus", component: AboutusComponent }] },
      { path: "home", component: HomeComponent, children: [{ path: "contact", component: ContactComponent }] },
      { path: "home", component: HomeComponent, children: [{ path: "transaction", component: TransactionComponent }] },
      { path: "home", component: HomeComponent, children: [{ path: "transactionflat/:flatId", component: TransactionflatComponent }] },
      { path: "home", component: HomeComponent, children: [{ path: "transactionhouse/:houseId", component: TransactionhouseComponent }] },
      { path: "home", component: HomeComponent, children: [{ path: "displayprop/:cityName", component: SearchbycityComponent }] },


      { path: "owner", component: OwnerComponent },
      // { path: "owner", component: OwnerComponent,children:[{path:"sell",component:SellComponent}]},
      { path: "owner", component: OwnerComponent, children: [{ path: "addflat", component: AddflatComponent }] },
      { path: "owner", component: OwnerComponent, children: [{ path: "addhouse", component: AddhouseComponent }] },
      { path: "owner", component: OwnerComponent, children: [{ path: "showflat", component: ShowflatComponent }] },
      { path: "owner", component: OwnerComponent, children: [{ path: "showhouse", component: ShowhouseComponent }] },
      { path: "owner", component: OwnerComponent, children: [{ path: "editprofile", component: EditprofileComponent }] },
      { path: "owner", component: OwnerComponent, children: [{ path: "editflat/:flatId", component: EditflatComponent }] },
      { path: "owner", component: OwnerComponent, children: [{ path: "edithouse/:houseId", component: EdithouseComponent }] },

      { path: "admin", component: AdminComponent },
      { path: "admin", component: AdminComponent, children: [{ path: "adminshowflats", component: AdminshowflatsComponent }] },
      { path: "admin", component: AdminComponent, children: [{ path: "adminshowhouse", component: AdminshowhouseComponent }] },
      { path: "admin", component: AdminComponent, children: [{ path: "adminshowallbuyers", component: AdminshowallbuyersComponent }] },
      { path: "admin", component: AdminComponent, children: [{ path: "adminshowallowners", component: AdminshowallownersComponent }] },
      { path: "admin", component: AdminComponent, children: [{ path: "editprofile", component: EditprofileComponent }] },
      { path: "admin", component: AdminComponent, children: [{ path: "adminshowtransaction", component: AdminshowtransactionComponent }] },
      { path: "admin", component: AdminComponent, children: [{ path: "displayflat/:flatId", component: DisplayflatComponent }] },
      { path: "admin", component: AdminComponent, children: [{ path: "displayhouse/:houseId", component: DisplayhouseComponent }] },
      { path: "admin", component: AdminComponent, children: [{ path: "addcity", component: AdminaddcityComponent }] }



    ])
  ],
  providers: [
    AuthService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("App Module Created");
  }
}
