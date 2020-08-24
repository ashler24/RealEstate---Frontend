import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayhouseComponent } from './displayhouse.component';

describe('DisplayhouseComponent', () => {
  let component: DisplayhouseComponent;
  let fixture: ComponentFixture<DisplayhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
