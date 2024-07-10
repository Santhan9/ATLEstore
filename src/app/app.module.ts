import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HeaderComponent } from './header/header.component';
import { FeatureloginComponent } from './featurelogin/featurelogin.component';
import { FeatureregisterComponent } from './featureregister/featureregister.component';
import { Featureregister } from './featureregister.html/featureregister.html.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HeaderComponent,
    FeatureloginComponent,
    FeatureregisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
