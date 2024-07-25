import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FeatureloginComponent } from './featureloginpage/featureloginpage.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    FeatureloginComponent,
  ],
  imports: [
    BrowserModule,
  ],providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
