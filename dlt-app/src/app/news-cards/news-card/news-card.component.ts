import { Component, Input, OnInit } from '@angular/core';
import { ArticleDto } from 'src/app/models/articleModels';

@Component({
  selector: '[app-news-card]',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() article: ArticleDto;

  constructor() {}

  ngOnInit(): void {}

  public generateShortContent(article: ArticleDto): string {
    return article.content.substr(0, 200) + '...';
  }
}
