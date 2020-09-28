import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ArticleDto } from './models/articleModels';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getArticles(@Query() params): ArticleDto {
    return this.appService.getArticleById(+params.id);
  }

  @Post()
  saveComment(@Body() body): boolean {
    if (body) {
      return true;
    }
  }
}
