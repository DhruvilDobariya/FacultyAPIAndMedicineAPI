import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FacultiesComponent } from './faculties/faculties.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';
import { InsertEditFacultyComponent } from './insert-edit-faculty/insert-edit-faculty.component';
import { LoginComponent } from './login/login.component';
import { MedicineComponent } from './medicine/medicine.component';
import { MedicineDetailComponent } from './medicine-detail/medicine-detail.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FacultiesComponent,
    DetailFacultyComponent,
    InsertEditFacultyComponent,
    LoginComponent,
    MedicineComponent,
    MedicineDetailComponent,
    AddMedicineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
