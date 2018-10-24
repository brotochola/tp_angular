import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { J3Component } from './j3.component';

describe('J3Component', () => {
  let component: J3Component;
  let fixture: ComponentFixture<J3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ J3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(J3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
