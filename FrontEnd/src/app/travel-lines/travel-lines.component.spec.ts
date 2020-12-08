import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelLineComponent } from './travel-lines.component';

describe('TravelLinesComponent', () => {
  let component: TravelLineComponent;
  let fixture: ComponentFixture<TravelLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
