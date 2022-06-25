import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFacultiesService } from '../api-faculties.service';
@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {
  
  faculties : any [] = [];
  constructor(private _api :ApiFacultiesService,private _router: Router) { }
  
  ngOnInit(): void {
    let ob = this._api.getFaculies();
    ob.subscribe((response : any)=>{
      this.faculties = response.records;
    })
  }
  detailFaculty(id : number){
    this._router.navigate(['faculty',id]);
  }
}
