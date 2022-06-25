import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEditFacultyComponent } from './insert-edit-faculty.component';

describe('InsertEditFacultyComponent', () => {
  let component: InsertEditFacultyComponent;
  let fixture: ComponentFixture<InsertEditFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertEditFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertEditFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
