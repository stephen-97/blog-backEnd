import { Injectable } from '@nestjs/common';
import { CreateGameArticleDto } from './dto/create-game-article.dto';
import { UpdateGameArticleDto } from './dto/update-game-article.dto';
import {InjectModel} from "@nestjs/mongoose";
import {GameArticle} from "./entities/game-article.entity";
import {GameArticleController} from "./game-article.controller";
import * as mongoose from "mongoose";
import { DeleteResult } from 'typeorm/driver/mongodb/typings';

@Injectable()
export class GameArticleService {

  constructor(
      @InjectModel(GameArticle.name)
      private gameArticleModel : mongoose.Model<GameArticle>
  ) {}
  create(createGameArticleDto: CreateGameArticleDto) {

    return this.gameArticleModel.create(createGameArticleDto)
  }

  findAll() {
    return this.gameArticleModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} gameArticle`;
  }

  update(id: number, updateGameArticleDto: UpdateGameArticleDto) {
    return `This action updates a #${id} gameArticle`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameArticle`;
  }

  removeAll(): Promise<DeleteResult> {
    return this.gameArticleModel.deleteMany({})
  }
}


/**
 * export class GameTypeService {
 *
 *     constructor(
 *         @InjectModel(GameType.name)
 *         private gameTypeModel: mongoose.Model<GameType>,
 *         private appService: AppService
 *     ) {}
 *
 *     async findAll(): Promise<GameType[]> {
 *         return this.gameTypeModel.find();
 *     }
 *
 *     async create(gameType: GameType): Promise<GameType> {
 *         return this.gameTypeModel.create(gameType)
 *     }
 *
 *     async update(gameType: GameType): Promise<UpdateResult> {
 *         return this.gameTypeModel.updateOne(gameType)
 *     }
 *
 *     async deleteAll(): Promise<DeleteResult> {
 *         return this.gameTypeModel.deleteMany({})
 *     }
 * }
 */