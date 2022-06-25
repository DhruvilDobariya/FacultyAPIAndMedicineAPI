import { HeaderComponent } from './../header/header.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Medicine } from './../medicine';
import { ApiMedicineService } from './../api-medicine.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  class : number = 0;
  medicine : Medicine = new Medicine();
  id : number = 0;
  constructor(private _api : ApiMedicineService,private _router : Router,private _activatedrouter : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activatedrouter.snapshot.params.id;
    if(this.id == undefined){
      this.id = 0;
    }
    else{
      this._api.getMedicineById(this.id).subscribe((response : any)=>{
        this.medicine = response;
      })
    }
  }
  addEditMedicine(){
    if(this.id == 0){
      this._api.insert(this.medicine).subscribe((response : any)=>{
        swal({
          title : "Done",
          text : this.medicine.DrugName + " is added successfully",
          icon : "success"
        })
        this._router.navigate(['medicines']);
      })
    }
    else{
      this._api.update(this.id,this.medicine).subscribe((response : any)=>{
        swal({
          title : "Done",
          text : this.medicine.DrugName + " is updated successfully",
          icon : "success"
        })
        this._router.navigate(['medicines']);
      })
    }
  }
  back(){
    this._router.navigate(['medicine',this.id])
  }
  Test(){

  }
}
