import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { J4Component } from './j4.component';

describe('J4Component', () => {
  let component: J4Component;
  let fixture: ComponentFixture<J4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ J4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(J4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
