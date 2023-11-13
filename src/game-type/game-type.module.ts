import {Module} from '@nestjs/common';
import {GameTypeController} from './game-type.controller';
import {GameTypeService} from './game-type.service';
import {MongooseModule} from '@nestjs/mongoose';
import {GameType, GameTypeSchema} from "./schemas/gameType.schema";
import {AppService} from "../app.service";
import {GameArticle, GameArticleSchema} from "../game-article/entities/game-article.entity";

@Module({
    imports: [MongooseModule.forFeature(
        [
            {name: GameType.name, schema: GameTypeSchema},
            {name: GameArticle.name, schema: GameArticleSchema},
        ]
    )],
    controllers: [GameTypeController],
    providers: [GameTypeService, AppService],
})
export class GameTypeModule {}
