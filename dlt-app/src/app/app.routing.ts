import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadChildren: () => import('./news-cards/news-card.module').then(m => m.NewsCardModule),
  },
  {
    path: 'article',
    loadChildren: () => import('./news-articles/news-articles.module').then(m => m.NewsArticlesModule),
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then(m => m.FormModule),
  },
];
