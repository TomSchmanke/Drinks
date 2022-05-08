import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkComponent } from './drink/drink.component';
import { TitleBannerComponent } from './title-banner/title-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkComponent,
    TitleBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }