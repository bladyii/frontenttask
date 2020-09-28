import { Routes } from '@angular/router';
import { NewsArticleComponent } from './news-article/news-article.component';

export const NEWS_ARTICLES_ROUTING: Routes = [
  {
    path: ':id',
    component: NewsArticleComponent,
  },
];
