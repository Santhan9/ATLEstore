import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ReddyComponent } from './reddy/reddy.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
=======
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HeaderComponent } from './header/header.component';

>>>>>>> 0a431c35233e2a7550e7ffab3d3ea89a22414505

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ReddyComponent,
    LoginpageComponent
=======
    LoginpageComponent,
    HeaderComponent
>>>>>>> 0a431c35233e2a7550e7ffab3d3ea89a22414505
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
