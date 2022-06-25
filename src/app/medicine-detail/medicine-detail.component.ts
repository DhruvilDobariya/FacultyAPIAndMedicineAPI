import { Medicine } from './../medicine';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMedicineService } from './../api-medicine.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css']
})
export class MedicineDetailComponent implements OnInit {

  id : number = 0;
  medicine : Medicine = new Medicine();
  constructor(private _api : ApiMedicineService,private _activatedrouter : ActivatedRoute,private _router : Router) { }

  ngOnInit(): void {
    this.id = this._activatedrouter.snapshot.params.id;
    this._api.getMedicineById(this.id).subscribe((response : any)=>{
      this.medicine = response;
    })
  }
  delete(){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover "+ this.medicine.DrugName +"'s Data!",
      icon: "warning",
      buttons: ["Cancel", true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._api.delete(this.id).subscribe((response : any)=>{
          swal(this.medicine.DrugName + " is successfully deleted", {
            icon: "success",
          });
          this._router.navigate(['medicines']);
        })
      } else {
        swal(this.medicine.DrugName +"'s Data is safe!");
      }
    });
  }
  edit(){
    this._router.navigate(['medicine/edit',this.id]);
  }

}
