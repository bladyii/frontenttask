import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleDto } from 'src/app/models/articleModels';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss'],
})
export class NewsArticleComponent implements OnInit {
  public article: ArticleDto;

  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    if (id) {
      this.newsService.getNewsById(id).subscribe((response) => {
        if (response) {
          this.article = response as ArticleDto;
        } else {
          this.redirectToFeed();
        }
      });
    } else {
      this.redirectToFeed();
    }
  }

  private redirectToFeed(): void {
    this.router.navigate(['/news/feed']);
  }
}
