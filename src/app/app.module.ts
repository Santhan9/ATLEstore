// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureloginComponent } from './featureloginpage/featureloginpage.component';
@NgModule({
  declarations:[
    AppComponent,
    FeatureloginComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

