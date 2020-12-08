import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelLinesDetailComponent } from './travel-lines-detail.component';

describe('TravelLinesDetailComponent', () => {
  let component: TravelLinesDetailComponent;
  let fixture: ComponentFixture<TravelLinesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelLinesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelLinesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
