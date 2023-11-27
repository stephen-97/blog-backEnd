import { Injectable } from '@nestjs/common';
import {UseInterceptors} from "@nestjs/common";
import {FileInterceptor} from "@nestjs/platform-express";
import { CreateGameArticleImageDto } from './dto/create-game-article-image.dto';
import { UpdateGameArticleImageDto } from './dto/update-game-article-image.dto';

@Injectable()
export class GameArticleImagesService {

  @UseInterceptors(FileInterceptor('file'))
  create(createGameArticleImageDto: CreateGameArticleImageDto) {
    return 'This action adds a new gameArticleImage';
  }

  findAll() {
    return `This action returns all gameArticleImages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gameArticleImage`;
  }

  update(id: number, updateGameArticleImageDto: UpdateGameArticleImageDto) {
    return `This action updates a #${id} gameArticleImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameArticleImage`;
  }
}
