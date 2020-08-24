import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private helper: HttpClient) { }


  LoginFromBackend(userCredentials) {
    return this.helper.post("http://localhost:8080/RealEstateV1/user/login", userCredentials);
  }

  RegisterUser(regData) {
    return this.helper.post("http://localhost:8080/RealEstateV1/user/register", regData);
  }

  EditDetails(userId, editData) {
    return this.helper.post("http://localhost:8080/RealEstateV1/user/editprofile/" + userId, editData);
  }

  GetFlatList(currentUser) {
    return this.helper.post("http://localhost:8080/RealEstateV1/user/flats", currentUser);
  }

  GetFlatById(flatId) {
    return this.helper.get("http://localhost:8080/RealEstateV1/user/displayflat/" + flatId);
  }

  GetHouseById(houseId) {
    return this.helper.get("http://localhost:8080/RealEstateV1/user/displayhouse/" + houseId);
  }



  showFlats() {
    return this.helper.get("http://localhost:8080/RealEstateV1/user/showflats")
  }

  showHouses() {
    return this.helper.get("http://localhost:8080/RealEstateV1/user/showhouses")
  }

  GetAllFlatsByCity(cityName) {
    return this.helper.get("http://localhost:8080/RealEstateV1/user/showflatsbycity/" + cityName)
  }

  GetAllHousesByCity(cityName) {
    return this.helper.get("http://localhost:8080/RealEstateV1/user/showhousesbycity/" + cityName)
  }





  //owner

  AddNewFlat(userId, flatData) {
    return this.helper.post("http://localhost:8080/RealEstateV1/owner/addflats/" + userId, flatData);

  }

  AddNewHouse(userId, houseData) {
    return this.helper.post("http://localhost:8080/RealEstateV1/owner/addhouse/" + userId, houseData);

  }

  OwnershowFlats(userId) {
    return this.helper.get("http://localhost:8080/RealEstateV1/owner/showflats/" + userId)
  }

  OwnershowHouses(userId) {
    return this.helper.get("http://localhost:8080/RealEstateV1/owner/showhouses/" + userId)
  }


  DeleteFlatById(flatId) {
    return this.helper.delete("http://localhost:8080/RealEstateV1/owner/flat/" + flatId)
  }

  DeleteHouseById(houseId) {
    return this.helper.delete("http://localhost:8080/RealEstateV1/owner/house/" + houseId)

  }

  EditFlat(flatId, fnew) {
    return this.helper.post("http://localhost:8080/RealEstateV1/owner/editflat/" + flatId, fnew)
  }

  EditHouse(houseId, hnew) {
    return this.helper.post("http://localhost:8080/RealEstateV1/owner/edithouse/" + houseId, hnew)
  }

  ChangeFlatStaus(flatId) {
    return this.helper.get("http://localhost:8080/RealEstateV1/owner/flatstatus/" + flatId);
  }

  ChangeHouseStatus(houseId) {
    return this.helper.get("http://localhost:8080/RealEstateV1/owner/housestatus/" + houseId);
  }

  //admin 
  GetBuyers() {
    return this.helper.get("http://localhost:8080/RealEstateV1/admin/showbuyers")
  }

  GetOwners() {
    return this.helper.get("http://localhost:8080/RealEstateV1/admin/showowners")
  }



  GetAllTx() {
    return this.helper.get("http://localhost:8080/RealEstateV1/admin/showtransactions")
  }

  AddHouseTransaction(txdata, buyerId, ownerId) {
    return this.helper.post("http://localhost:8080/RealEstateV1/admin/house/" + buyerId + "/" + ownerId, txdata)
  }

  AddFlatTransaction(txdata, buyerId, ownerId) {
    return this.helper.post("http://localhost:8080/RealEstateV1/admin/flat/" + buyerId + "/" + ownerId, txdata)
  }

  AddCity(cityData) {
    return this.helper.post("http://localhost:8080/RealEstateV1/admin/addcity", cityData)
  }

  GetAllCities() {
    return this.helper.get("http://localhost:8080/RealEstateV1/admin/showcities");
  }

  SendFlatMail(emailObj) {
    return this.helper.post("http://localhost:8080/RealEstateV1/email", emailObj)
  }

  SendHouseMail(emailObj) {
    return this.helper.post("http://localhost:8080/RealEstateV1/email", emailObj)
  }

}





