import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureloginComponent } from './featureloginpage.component';

describe('FeatureloginComponent', () => {
  let component: FeatureloginComponent;
  let fixture: ComponentFixture<FeatureloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
