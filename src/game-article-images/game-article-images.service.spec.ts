import { Test, TestingModule } from '@nestjs/testing';
import { GameArticleImagesService } from './game-article-images.service';

describe('GameArticleImagesService', () => {
  let service: GameArticleImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameArticleImagesService],
    }).compile();

    service = module.get<GameArticleImagesService>(GameArticleImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
