import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NEWS_ARTICLES_ROUTING } from './news-articles.routing';

const routes: Routes = NEWS_ARTICLES_ROUTING;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NewsArticlesRoutingModule { }
