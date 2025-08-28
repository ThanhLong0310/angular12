import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NaviComponent } from './navi/navi.component'; // thêm dòng này

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NaviComponent   // thêm dòng này
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
