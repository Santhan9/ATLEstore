// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureloginpageComponent } from './featureloginpage/featureloginpage.component';
@NgModule({
  declarations:[
    AppComponent,
    FeatureloginpageComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

