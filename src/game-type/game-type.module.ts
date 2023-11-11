import {Module} from '@nestjs/common';
import {GameTypeController} from './game-type.controller';
import {GameTypeService} from './game-type.service';
import {MongooseModule} from '@nestjs/mongoose';
import {GameTypeSchema} from "./schemas/gameType.schema";
import {AppModule} from "../app.module";
import {AppService} from "../app.service";

@Module({
    imports: [MongooseModule.forFeature([{name: 'GameType', schema: GameTypeSchema}])],
    controllers: [GameTypeController],
    providers: [GameTypeService, AppService],
})
export class GameTypeModule {}
