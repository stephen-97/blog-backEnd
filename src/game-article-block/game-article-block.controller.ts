import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameArticleBlockService } from './game-article-block.service';
import { CreateGameArticleBlockDto } from './dto/create-game-article-block.dto';
import { UpdateGameArticleBlockDto } from './dto/update-game-article-block.dto';

@Controller('game-article-block')
export class GameArticleBlockController {
  constructor(private readonly gameArticleBlockService: GameArticleBlockService) {}

  @Post()
  create(@Body() createGameArticleBlockDto: CreateGameArticleBlockDto) {
    return this.gameArticleBlockService.create(createGameArticleBlockDto);
  }

  @Get()
  findAll() {
    return this.gameArticleBlockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameArticleBlockService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameArticleBlockDto: UpdateGameArticleBlockDto) {
    return this.gameArticleBlockService.update(+id, updateGameArticleBlockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameArticleBlockService.remove(+id);
  }
}
