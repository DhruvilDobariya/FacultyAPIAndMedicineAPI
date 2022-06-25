import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiMedicineService {

  URL = "https://arjunbala.com/DFaculty/api.php/records/medicines";
  constructor(private _http : HttpClient) { }

  getMedicine(){
    return this._http.get(this.URL);
  }
  getMedicineById(id : any){
    return this._http.get(this.URL + "/" + id);
  }
  delete(id : any){
    return this._http.delete(this.URL + "/" + id);
  }
  insert(form : any){
    return this._http.post(this.URL,form);
  }
  update(id : any,form : any){
    return this._http.put(this.URL + "/" + id,form);
  }
}
