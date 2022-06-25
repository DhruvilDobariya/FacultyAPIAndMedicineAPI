import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  URL = "https://arjunbala.com/DFaculty/api.php/records/user";
  constructor(private _http : HttpClient) { }

  getUser(){
    return this._http.get(this.URL);
  }
}
