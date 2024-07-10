import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureregisterComponent } from './featureregister.component';

describe('FeatureregisterComponent', () => {
  let component: FeatureregisterComponent;
  let fixture: ComponentFixture<FeatureregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
