import { NgModule } from '@angular/core';
import { NewsArticlesRoutingModule } from './news-articles-routing.module';
import { NewsArticleComponent } from './news-article/news-article.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NewsArticleComponent],
  imports: [CommonModule, NewsArticlesRoutingModule],
})
export class NewsArticlesModule {}
  