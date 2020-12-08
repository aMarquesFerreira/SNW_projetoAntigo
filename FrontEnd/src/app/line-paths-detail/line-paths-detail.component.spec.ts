import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinePathsDetailComponent } from './line-paths-detail.component';

describe('LinePathsDetailComponent', () => {
  let component: LinePathsDetailComponent;
  let fixture: ComponentFixture<LinePathsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinePathsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinePathsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
