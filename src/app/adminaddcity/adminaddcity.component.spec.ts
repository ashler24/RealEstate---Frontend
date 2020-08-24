import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddcityComponent } from './adminaddcity.component';

describe('AdminaddcityComponent', () => {
  let component: AdminaddcityComponent;
  let fixture: ComponentFixture<AdminaddcityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaddcityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
