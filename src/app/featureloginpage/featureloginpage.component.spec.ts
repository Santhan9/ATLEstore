import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureloginpageComponent } from './featureloginpage.component';

describe('FeatureloginpageComponent', () => {
  let component: FeatureloginpageComponent;
  let fixture: ComponentFixture<FeatureloginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureloginpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureloginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
