import { Module } from '@nestjs/common';
import { GameArticleController } from './game-article.controller';
import { GameArticleService } from './game-article.service';

@Module({
  controllers: [GameArticleController],
  providers: [GameArticleService]
})
export class GameArticleModule {}
