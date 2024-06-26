import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile} from '@nestjs/common';
import { GameArticleService } from './game-article.service';
import { CreateGameArticleDto } from './dto/create-game-article.dto';
import { UpdateGameArticleDto } from './dto/update-game-article.dto';
import {GameType} from "../game-type/schemas/gameType.schema";
import {GameArticle} from "./entities/game-article.entity";
import { DeleteResult } from 'typeorm/driver/mongodb/typings';
import {FileInterceptor} from "@nestjs/platform-express";
import {FormDataRequest, HasMimeType, MemoryStoredFile} from "nestjs-form-data";

@Controller('game-article')
export class GameArticleController {
  constructor(private readonly gameArticleService: GameArticleService) {}

  @Post()
  @UseInterceptors(FileInterceptor('mainImage'))
  create( @UploadedFile() mainImage: Express.Multer.File, @Body() createGameArticleDto: CreateGameArticleDto) {
    return this.gameArticleService.create(mainImage, createGameArticleDto);
  }

  @Get()
  findAll(): Promise<GameArticle[]> {
    return this.gameArticleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameArticleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameArticleDto: UpdateGameArticleDto) {
    return this.gameArticleService.update(+id, updateGameArticleDto);
  }

  @Delete('/deleteAll')
  async deleteAllGameType(): Promise <DeleteResult>{
    return this.gameArticleService.removeAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameArticleService.remove(+id);
  }
}
