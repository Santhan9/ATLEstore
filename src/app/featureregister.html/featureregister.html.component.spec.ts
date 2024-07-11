import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Featureregister.HtmlComponent } from './featureregister.html.component';

describe('Featureregister.HtmlComponent', () => {
  let component: Featureregister.HtmlComponent;
  let fixture: ComponentFixture<Featureregister.HtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Featureregister.HtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Featureregister.HtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
