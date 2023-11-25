import { Module } from '@nestjs/common';
import { GameArticleImagesService } from './game-article-images.service';
import { GameArticleImagesController } from './game-article-images.controller';

@Module({
  controllers: [GameArticleImagesController],
  providers: [GameArticleImagesService],
})
export class GameArticleImagesModule {}
