import { Component, OnInit } from '@angular/core';
import { ArticleDto } from 'src/app/models/articleModels';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-card-row',
  templateUrl: './news-card-row.component.html',
  styleUrls: ['./news-card-row.component.scss'],
})
export class NewsCardRowComponent implements OnInit {
  public articles: ArticleDto[];
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNewsShort().subscribe((response) => {
      this.articles = response;
    });
  }
}
