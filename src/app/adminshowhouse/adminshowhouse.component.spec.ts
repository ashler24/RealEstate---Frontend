import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowhouseComponent } from './adminshowhouse.component';

describe('AdminshowhouseComponent', () => {
  let component: AdminshowhouseComponent;
  let fixture: ComponentFixture<AdminshowhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminshowhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminshowhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
