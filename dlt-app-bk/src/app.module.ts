import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ArticlesController } from './articles.controller';
import { CardsController } from './cards.controller';

@Module({
  imports: [],
  controllers: [ArticlesController, CardsController],
  providers: [AppService],
})
export class AppModule {}
