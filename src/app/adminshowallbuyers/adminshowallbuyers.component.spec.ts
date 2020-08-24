import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowallbuyersComponent } from './adminshowallbuyers.component';

describe('AdminshowallbuyersComponent', () => {
  let component: AdminshowallbuyersComponent;
  let fixture: ComponentFixture<AdminshowallbuyersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminshowallbuyersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminshowallbuyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
