import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionflatComponent } from './transactionflat.component';

describe('TransactionflatComponent', () => {
  let component: TransactionflatComponent;
  let fixture: ComponentFixture<TransactionflatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionflatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionflatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
