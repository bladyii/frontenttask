import { Routes } from '@angular/router';
import { NewsCardLayoutComponent } from './news-card-layout/news-card-layout.component';

export const NEWS_CARD_ROUTING: Routes = [
  {
    path: '',
    children: [
      {
        path: 'feed',
        component: NewsCardLayoutComponent,
      },
      {
        path: '',
        redirectTo: 'feed',
        pathMatch: 'full',
      },
    ],
  },
];
