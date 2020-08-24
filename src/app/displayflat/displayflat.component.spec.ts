import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayflatComponent } from './displayflat.component';

describe('DisplayflatComponent', () => {
  let component: DisplayflatComponent;
  let fixture: ComponentFixture<DisplayflatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayflatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayflatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
