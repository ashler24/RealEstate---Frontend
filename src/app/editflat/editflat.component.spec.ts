import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditflatComponent } from './editflat.component';

describe('EditflatComponent', () => {
  let component: EditflatComponent;
  let fixture: ComponentFixture<EditflatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditflatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditflatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
