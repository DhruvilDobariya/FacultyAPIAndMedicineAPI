import { Faculty } from './../faculty';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFacultiesService } from '../api-faculties.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-detail-faculty',
  templateUrl: './detail-faculty.component.html',
  styleUrls: ['./detail-faculty.component.css']
})
export class DetailFacultyComponent implements OnInit {
  
  id = 0;
  faculty : Faculty = new Faculty();
  constructor(private _activetedRoute : ActivatedRoute,private _api : ApiFacultiesService,private _route : Router) {}
  
  ngOnInit(): void {
    this.id  = this._activetedRoute.snapshot.params.id;
    let ob = this._api.getFacultyById(this.id);
    ob.subscribe((response: any)=>{
      this.faculty = response;
      console.log(this.faculty);
    })
  }
  deleteFaculty(){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover "+ this.faculty.FacultyName +"'s Data!",
      icon: "warning",
      buttons: ["Cancel", true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._api.deleteFaculty(this.id).subscribe((response: any)=>{
          swal(this.faculty.FacultyName + " is successfully deleted", {
            icon: "success",
          });
          this._route.navigate(['faculties']);
        })
      } else {
        swal(this.faculty.FacultyName +"'s Data is safe!");
      }
    });
  } 
  edit(){
    this._route.navigate(['faculty/edit',this.id]);
  }
}

