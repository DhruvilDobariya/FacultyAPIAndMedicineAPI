import { AuthGuard } from './auth.guard';
import { MedicineDetailComponent } from './medicine-detail/medicine-detail.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { MedicineComponent } from './medicine/medicine.component';
import { LoginComponent } from './login/login.component';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { InsertEditFacultyComponent } from './insert-edit-faculty/insert-edit-faculty.component';
const routes: Routes = [
  {
    path: '',
    component: FacultiesComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'faculties',
    component: FacultiesComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'medicines',
    component: MedicineComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'faculty/add',
    component: InsertEditFacultyComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'medicine/add',
    component: AddMedicineComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'faculty/edit/:id',
    component: InsertEditFacultyComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'medicine/edit/:id',
    component: AddMedicineComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'faculty/:id',
    component: DetailFacultyComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'medicine/:id',
    component: MedicineDetailComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
