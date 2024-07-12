import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureHomeScreenComponent } from './feature-home-screen.component';

describe('FeatureHomeScreenComponent', () => {
  let component: FeatureHomeScreenComponent;
  let fixture: ComponentFixture<FeatureHomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureHomeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
