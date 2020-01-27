import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondControllerComponent } from './second-controller.component';

describe('SecondControllerComponent', () => {
  let component: SecondControllerComponent;
  let fixture: ComponentFixture<SecondControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
