import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';

const routes: Routes = [
  {path:'portfolio/:id', component:PortfolioComponent},
  {path:'', redirectTo:'portfolio/13', pathMatch:'full'},
  {path:'portfolio-list', component: PortfolioListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
