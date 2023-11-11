import { Test, TestingModule } from '@nestjs/testing';
import { GameTypeController } from './game-type.controller';

describe('GameTypeController', () => {
  let controller: GameTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameTypeController],
    }).compile();

    controller = module.get<GameTypeController>(GameTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
