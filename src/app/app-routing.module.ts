import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {path:'portfolio/:id', component:PortfolioComponent},
  {path:'', redirectTo:'portfolio/3', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
