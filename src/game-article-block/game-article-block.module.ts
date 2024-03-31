import { Module } from '@nestjs/common';
import { GameArticleBlockService } from './game-article-block.service';
import { GameArticleBlockController } from './game-article-block.controller';

@Module({
  controllers: [GameArticleBlockController],
  providers: [GameArticleBlockService],
})
export class GameArticleBlockModule {}
