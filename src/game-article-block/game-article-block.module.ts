import { Module } from '@nestjs/common';
import { GameArticleBlockService } from './game-article-block.service';
import { GameArticleBlockController } from './game-article-block.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {GameType, GameTypeSchema} from "../game-type/schemas/gameType.schema";
import {GameArticleBlock} from "./entities/game-article-block.entity";

@Module({
  imports: [MongooseModule.forFeature(
      [
        {name: GameArticleBlock.name, schema: GameTypeSchema},
      ]
  )],
  controllers: [GameArticleBlockController],
  providers: [GameArticleBlockService],
  exports: [GameArticleBlockService]
})
export class GameArticleBlockModule {}
