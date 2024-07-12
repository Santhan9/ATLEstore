// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeatureHomeScreenComponent } from './feature-home-screen/feature-home-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeatureHomeScreenComponent,
  

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
