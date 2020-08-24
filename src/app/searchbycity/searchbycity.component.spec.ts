import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbycityComponent } from './searchbycity.component';

describe('SearchbycityComponent', () => {
  let component: SearchbycityComponent;
  let fixture: ComponentFixture<SearchbycityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbycityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbycityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
