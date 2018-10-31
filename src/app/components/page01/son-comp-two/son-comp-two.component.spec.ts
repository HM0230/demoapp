import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonCompTwoComponent } from './son-comp-two.component';

describe('SonCompTwoComponent', () => {
  let component: SonCompTwoComponent;
  let fixture: ComponentFixture<SonCompTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonCompTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonCompTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
