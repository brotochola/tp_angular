import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { J1Component } from './j1.component';

describe('J1Component', () => {
  let component: J1Component;
  let fixture: ComponentFixture<J1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ J1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(J1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
