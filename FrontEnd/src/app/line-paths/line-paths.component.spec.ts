import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinePathsComponent } from './line-paths.component';

describe('LinePathsComponent', () => {
  let component: LinePathsComponent;
  let fixture: ComponentFixture<LinePathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinePathsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinePathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
