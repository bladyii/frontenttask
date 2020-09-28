import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NEWS_CARD_ROUTING } from './news-card.routing';

const routes: Routes = NEWS_CARD_ROUTING;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NewsCardRoutingModule { }
