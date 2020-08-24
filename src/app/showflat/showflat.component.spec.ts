import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowflatComponent } from './showflat.component';

describe('ShowflatComponent', () => {
  let component: ShowflatComponent;
  let fixture: ComponentFixture<ShowflatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowflatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowflatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
