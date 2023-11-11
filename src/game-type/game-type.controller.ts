import {Body, Controller, Get, Post, Delete, Put} from '@nestjs/common';
import { GameTypeService} from "./game-type.service";
import {GameType} from "./schemas/gameType.schema";
import {CreateGameTypeDto} from "./dto/create-gameType.dto";
import {UpdateGameTypeDto} from "./dto/update-gameType.dto";
import {DeleteResult, UpdateResult } from 'typeorm/driver/mongodb/typings';

@Controller('game-type')
export class GameTypeController {
    constructor(private gameTypeService: GameTypeService) {}

    @Get()
    async getAllGamesType(): Promise<GameType[]>{
        return this.gameTypeService.findAll();
    }

    @Post()
    async createGameType(
        @Body()
        gameType: CreateGameTypeDto,
    ): Promise<GameType>{
        return this.gameTypeService.create(gameType);
    }

    @Delete('/deleteAll')
    async deleteAllGameType(): Promise <DeleteResult>{
        return this.gameTypeService.deleteAll();
    }


    @Put()
    async updateGameType(
        @Body()
        gameType: UpdateGameTypeDto
    ): Promise <UpdateResult>{
        return this.gameTypeService.update(gameType);
    }

}
