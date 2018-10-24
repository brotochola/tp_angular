import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { J5Component } from './j5.component';

describe('J5Component', () => {
  let component: J5Component;
  let fixture: ComponentFixture<J5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ J5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(J5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
