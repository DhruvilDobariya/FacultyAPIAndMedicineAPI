import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiFacultiesService {

  URL = "https://arjunbala.com/DFaculty/api.php/records/faculty";
  constructor(private _http : HttpClient) { }

  getFaculies(){
    return this._http.get(this.URL);
  }
  getFacultyById(id : number){
    return this._http.get(this.URL + "/" + id);
  }
  deleteFaculty(id : number){
    return this._http.delete(this.URL + "/" + id);
  }
  insertFaculty(form : any){
    return this._http.post(this.URL,form)
  }
  updateFaculty(form: any, id: any){
    return this._http.put(this.URL + "/" + id , form);
  }
}
