import {Injectable} from '@nestjs/common';
import {GameType} from "./schemas/gameType.schema";
import * as mongoose from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {AppService} from "../app.service";
import {DeleteResult, UpdateResult } from 'typeorm/driver/mongodb/typings';

@Injectable()
export class GameTypeService {

    constructor(
        @InjectModel(GameType.name)
        private gameTypeModel: mongoose.Model<GameType>,
        private appService: AppService
    ) {}

    async findAll(): Promise<GameType[]> {
        return this.gameTypeModel.find();
    }

    async create(gameType: GameType): Promise<GameType> {
        return this.gameTypeModel.create(gameType)
    }

    async update(gameType: GameType): Promise<UpdateResult> {
        return this.gameTypeModel.updateOne(gameType)
    }

    async deleteAll(): Promise<DeleteResult> {
        return this.gameTypeModel.deleteMany({})
    }
}
