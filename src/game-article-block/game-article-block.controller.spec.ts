import { Test, TestingModule } from '@nestjs/testing';
import { GameArticleBlockController } from './game-article-block.controller';
import { GameArticleBlockService } from './game-article-block.service';

describe('GameArticleBlockController', () => {
  let controller: GameArticleBlockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameArticleBlockController],
      providers: [GameArticleBlockService],
    }).compile();

    controller = module.get<GameArticleBlockController>(GameArticleBlockController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
