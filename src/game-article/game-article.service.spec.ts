import { Test, TestingModule } from '@nestjs/testing';
import { GameArticleService } from './game-article.service';

describe('GameArticleService', () => {
  let service: GameArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameArticleService],
    }).compile();

    service = module.get<GameArticleService>(GameArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
