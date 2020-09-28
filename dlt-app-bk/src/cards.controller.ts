import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ArticleDto } from './models/articleModels';

@Controller('cards')
export class CardsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getArticlesShort(): ArticleDto[] {
    return this.appService.getArticles();
  }
}
