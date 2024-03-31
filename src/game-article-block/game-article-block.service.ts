import { Injectable } from '@nestjs/common';
import { CreateGameArticleBlockDto } from './dto/create-game-article-block.dto';
import { UpdateGameArticleBlockDto } from './dto/update-game-article-block.dto';

@Injectable()
export class GameArticleBlockService {
  create(createGameArticleBlockDto: CreateGameArticleBlockDto) {
    return 'This action adds a new gameArticleBlock';
  }

  findAll() {
    return `This action returns all gameArticleBlock`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gameArticleBlock`;
  }

  update(id: number, updateGameArticleBlockDto: UpdateGameArticleBlockDto) {
    return `This action updates a #${id} gameArticleBlock`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameArticleBlock`;
  }
}
