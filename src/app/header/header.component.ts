import { Router, ActivatedRoute } from '@angular/router';
import { Component, Injectable, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  isValidUser = false;
  constructor(private _router : Router) { }
  
  ngOnInit(): void {
    document.querySelector("ul.navbar-nav")?.children[0].setAttribute("id","Active");
  }
  logout(){
    sessionStorage.removeItem('un');
    this._router.navigate(['login']);
  }
  Active(n : any){
    let element = document.querySelector("ul.navbar-nav");
    element?.children[n].setAttribute("id","Active");
    for(let i = 0;i <= 3;i++){
      if(i == n){
        continue;
      }
      element?.children[i].removeAttribute("id");
    }
  }
}