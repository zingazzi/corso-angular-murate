import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstControllerComponent } from './first-controller.component';

describe('FirstControllerComponent', () => {
  let component: FirstControllerComponent;
  let fixture: ComponentFixture<FirstControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
