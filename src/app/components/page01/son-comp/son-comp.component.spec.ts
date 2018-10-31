import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonCompComponent } from './son-comp.component';

describe('SonCompComponent', () => {
  let component: SonCompComponent;
  let fixture: ComponentFixture<SonCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
