import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatingLogoComponent } from './beating-logo.component';

describe('BeatingLogoComponent', () => {
  let component: BeatingLogoComponent;
  let fixture: ComponentFixture<BeatingLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatingLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatingLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
