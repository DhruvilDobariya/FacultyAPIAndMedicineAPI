import { Router } from '@angular/router';
import { Medicine } from './../medicine';
import { ApiMedicineService } from './../api-medicine.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  medicines : any [] = [];
  constructor(private _api : ApiMedicineService,private _route : Router) { }

  ngOnInit(): void {
    this._api.getMedicine().subscribe((response : any)=>{
      this.medicines = response.records;
    })
  }
  view(id: any){
    this._route.navigate(['medicine',id]);
  }

}
