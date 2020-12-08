import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTypesComponent } from './driver-types.component';

describe('DriverTypesComponent', () => {
  let component: DriverTypesComponent;
  let fixture: ComponentFixture<DriverTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
