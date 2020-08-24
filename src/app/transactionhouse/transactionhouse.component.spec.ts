import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionhouseComponent } from './transactionhouse.component';

describe('TransactionhouseComponent', () => {
  let component: TransactionhouseComponent;
  let fixture: ComponentFixture<TransactionhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
