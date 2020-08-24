import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowtransactionComponent } from './adminshowtransaction.component';

describe('AdminshowtransactionComponent', () => {
  let component: AdminshowtransactionComponent;
  let fixture: ComponentFixture<AdminshowtransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminshowtransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminshowtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
