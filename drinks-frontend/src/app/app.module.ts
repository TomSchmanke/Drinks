import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkComponent } from './drink/drink.component';
import { TitleBannerComponent } from './title-banner/title-banner.component';
import { FrontpageComponent } from './front-page/front-page.component';
import { IngredientsOverviewPageComponent } from './ingredients-overview-page/ingredients-overview-page.component';
import { IngredientsModifyComponent } from './ingredients-management/pages/ingredients-modify/ingredients-modify.component';
import { OldFrontpageComponent } from './old-frontpage/old-frontpage.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoginDialogComponent } from './front-page/components/login-dialog/login-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkComponent,
    TitleBannerComponent,
    FrontpageComponent,
    IngredientsOverviewPageComponent,
    IngredientsModifyComponent,
    OldFrontpageComponent,
    FooterComponent,
    LoginDialogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
