import { Test, TestingModule } from '@nestjs/testing';
import { GameArticleController } from './game-article.controller';
import { GameArticleService } from './game-article.service';

describe('GameArticleController', () => {
  let controller: GameArticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameArticleController],
      providers: [GameArticleService],
    }).compile();

    controller = module.get<GameArticleController>(GameArticleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
