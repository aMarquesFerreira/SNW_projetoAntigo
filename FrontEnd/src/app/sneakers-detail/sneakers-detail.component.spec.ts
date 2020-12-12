import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakersDetailComponent } from './sneakers-detail.component';

describe('SneakersDetailComponent', () => {
  let component: SneakersDetailComponent;
  let fixture: ComponentFixture<SneakersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
