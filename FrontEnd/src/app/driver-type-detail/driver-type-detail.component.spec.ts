import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTypeDetailComponent } from './driver-type-detail.component';

describe('DriverTypeDetailComponent', () => {
  let component: DriverTypeDetailComponent;
  let fixture: ComponentFixture<DriverTypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTypeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
