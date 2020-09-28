import { Injectable } from '@nestjs/common';
import { ARTICLES } from './assets/articles';
import { ArticleDto } from './models/articleModels';


@Injectable()
export class AppService {
  getArticles(): ArticleDto[] {
    const articles = ARTICLES;
    return articles;
  }

  getArticleById(id: number): ArticleDto {
    const article = ARTICLES.find(x => x.id === id);
    return article;
  }
}
