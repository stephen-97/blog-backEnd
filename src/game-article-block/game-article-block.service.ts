import {Inject, Injectable} from '@nestjs/common';
import { CreateGameArticleBlockDto } from './dto/create-game-article-block.dto';
import { UpdateGameArticleBlockDto } from './dto/update-game-article-block.dto';
import {InjectModel} from "@nestjs/mongoose";
import {GameArticle} from "../game-article/entities/game-article.entity";
import mongoose from "mongoose";
import {GameTypeService} from "../game-type/game-type.service";
import {GameArticleBlock} from "./entities/game-article-block.entity";

@Injectable()
export class GameArticleBlockService {

  constructor(
      @InjectModel(GameArticleBlock.name)
      private readonly gameArticleBlockModel: mongoose.Model<GameArticleBlock>,
      //@Inject(GameTypeService)
      //private readonly gameTypeService: GameTypeService,
  ) {
  }
  create(createGameArticleBlockDto: CreateGameArticleBlockDto) {
    return 'This action adds a new gameArticleBlock';
  }

  findAll() {
    return this.gameArticleBlockModel.find();
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

