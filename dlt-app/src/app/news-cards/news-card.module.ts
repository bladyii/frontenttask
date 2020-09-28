import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsCardRowComponent } from './news-card-row/news-card-row.component';
import { NewsCardLayoutComponent } from './news-card-layout/news-card-layout.component';
import { NewsCardRoutingModule } from './news-card-routing.module';
import { NewsCardGridComponent } from './news-card-grid/news-card-grid.component';
import { NewsCardHeadingComponent } from './news-card-heading/news-card-heading.component';

@NgModule({
  declarations: [
    NewsCardGridComponent,
    NewsCardComponent,
    NewsCardRowComponent,
    NewsCardLayoutComponent,
    NewsCardHeadingComponent
  ],
  imports: [CommonModule, NewsCardRoutingModule],
})
export class NewsCardModule {}
 