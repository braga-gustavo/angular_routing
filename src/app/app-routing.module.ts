import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexModule } from './pages/index/index.module';
import { PorfolioModule } from './pages/porfolio/portfolio.module';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/porfolio/card/card.component';

const routes: Routes = [
  { path: '', component: TitleComponent, pathMatch: 'full' },
  { path: 'portfolio/:id', component: CardComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), IndexModule, PorfolioModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
