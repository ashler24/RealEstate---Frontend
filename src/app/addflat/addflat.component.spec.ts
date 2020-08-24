import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddflatComponent } from './addflat.component';

describe('AddflatComponent', () => {
  let component: AddflatComponent;
  let fixture: ComponentFixture<AddflatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddflatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddflatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
