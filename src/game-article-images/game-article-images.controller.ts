import {Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors} from '@nestjs/common';
import { GameArticleImagesService } from './game-article-images.service';
import { CreateGameArticleImageDto } from './dto/create-game-article-image.dto';
import { UpdateGameArticleImageDto } from './dto/update-game-article-image.dto';
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import * as Buffer from "buffer";

@Controller('game-article-images')
export class GameArticleImagesController {
  constructor(private readonly gameArticleImagesService: GameArticleImagesService) {}

  @Post()
  @UseInterceptors(FileInterceptor("file", {
    storage: diskStorage({
      destination: "./game-articles-images",
      filename: (req, file, cb) => {
        const name = file.originalname.split('.')[0];
        const fileExtension = file.originalname.split('.')[1];
        const newFileName = name.split(" ").join('_')+"_"+Date.now() + '.' + fileExtension;

        cb(null, newFileName)
      }
    }),
    fileFilter(req: any, file: {
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: string;
      size: number;
      destination: string;
      filename: string;
      path: string;
      buffer: Buffer
    }, cb: (error: (Error | null), acceptFile: boolean) => void) {
      if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(null, false);
      }
      cb(null, true)
    }
  }))
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
