import { Test, TestingModule } from '@nestjs/testing';
import { GameArticleBlockService } from './game-article-block.service';

describe('GameArticleBlockService', () => {
  let service: GameArticleBlockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameArticleBlockService],
    }).compile();

    service = module.get<GameArticleBlockService>(GameArticleBlockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
