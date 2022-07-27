import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinksPageComponent } from './drinks-page/drinks-page.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { IngredientsModifyComponent } from './ingredients-management/pages/ingredients-modify/ingredients-modify.component';
import { IngredientsOverviewPageComponent } from './ingredients-overview-page/ingredients-overview-page.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent, pathMatch: 'full' },
  { path: 'drinks', component: DrinksPageComponent, pathMatch: 'full' },
  { path: 'ingredients-overview', component: IngredientsOverviewPageComponent, pathMatch: 'full'},
  { path: 'ingredients-modify/:id', component: IngredientsModifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
