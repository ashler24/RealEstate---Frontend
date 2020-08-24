import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowflatsComponent } from './adminshowflats.component';

describe('AdminshowflatsComponent', () => {
  let component: AdminshowflatsComponent;
  let fixture: ComponentFixture<AdminshowflatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminshowflatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminshowflatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
