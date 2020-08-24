import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowallownersComponent } from './adminshowallowners.component';

describe('AdminshowallownersComponent', () => {
  let component: AdminshowallownersComponent;
  let fixture: ComponentFixture<AdminshowallownersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminshowallownersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminshowallownersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
