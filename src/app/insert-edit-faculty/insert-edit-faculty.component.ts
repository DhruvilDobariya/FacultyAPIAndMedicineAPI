import { Router, ActivatedRoute } from '@angular/router';
import { ApiFacultiesService } from './../api-faculties.service';
import { Faculty } from './../faculty';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-insert-edit-faculty',
  templateUrl: './insert-edit-faculty.component.html',
  styleUrls: ['./insert-edit-faculty.component.css']
})
export class InsertEditFacultyComponent implements OnInit {

  id = 0;
  faculty : Faculty = new Faculty();
  constructor(private _api : ApiFacultiesService,private _route : Router,private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params.id;
    if(this.id == undefined){
      this.id = 0;
    }
    else{
      this._api.getFacultyById(this.id).subscribe((response: any)=>{
        this.faculty = response;
      })
    }
  }
  addEditFaculty(){
    if(this.id == 0){
      console.log(this.faculty);
      this._api.insertFaculty(this.faculty).subscribe((response: any)=>{
        console.log(response);
        swal({
          title : "Done",
          text : this.faculty.FacultyName + " is added successfully",
          icon : "success"
        })
        this._route.navigate(['faculties']);
      })
    }
    else{
      this._api.updateFaculty(this.faculty,this.id).subscribe((response: any)=>{
        swal({
          title : "Done",
          text : this.faculty.FacultyName + " is updated successfully",
          icon : "success"
        })
        this._route.navigate(['faculties']);
      })
    }
  }
  back(){
    this._route.navigate(['faculty',this.id]);
  }
}
