import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhouseComponent } from './addhouse.component';

describe('AddhouseComponent', () => {
  let component: AddhouseComponent;
  let fixture: ComponentFixture<AddhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
