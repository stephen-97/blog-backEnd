import { Test, TestingModule } from '@nestjs/testing';
import { GameArticleImagesController } from './game-article-images.controller';
import { GameArticleImagesService } from './game-article-images.service';

describe('GameArticleImagesController', () => {
  let controller: GameArticleImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameArticleImagesController],
      providers: [GameArticleImagesService],
    }).compile();

    controller = module.get<GameArticleImagesController>(GameArticleImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
