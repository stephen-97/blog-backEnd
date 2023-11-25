import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameArticleImagesService } from './game-article-images.service';
import { CreateGameArticleImageDto } from './dto/create-game-article-image.dto';
import { UpdateGameArticleImageDto } from './dto/update-game-article-image.dto';
import {UploadedFile, ParseFilePipeBuilder} from "@nestjs/common";

@Controller('game-article-images')
export class GameArticleImagesController {
  constructor(private readonly gameArticleImagesService: GameArticleImagesService) {}

  @Post()
  create(@Body() createGameArticleImageDto: CreateGameArticleImageDto) {
    return this.gameArticleImagesService.create(createGameArticleImageDto);
  }

  @Get()
  findAll() {
    return this.gameArticleImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameArticleImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameArticleImageDto: UpdateGameArticleImageDto) {
    return this.gameArticleImagesService.update(+id, updateGameArticleImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameArticleImagesService.remove(+id);
  }
}
