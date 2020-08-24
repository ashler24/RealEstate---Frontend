import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhouseComponent } from './showhouse.component';

describe('ShowhouseComponent', () => {
  let component: ShowhouseComponent;
  let fixture: ComponentFixture<ShowhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
