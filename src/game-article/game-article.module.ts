import {Module} from '@nestjs/common';
import {GameArticleService} from './game-article.service';
import {GameArticleController} from './game-article.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {GameArticle, GameArticleSchema} from "./entities/game-article.entity";
import {GameTypeModule} from "../game-type/game-type.module";
import {GameType, GameTypeSchema} from "../game-type/schemas/gameType.schema";
import {NestjsFormDataModule} from "nestjs-form-data";


@Module({
    imports: [
        MongooseModule.forFeature([
            {name: GameArticle.name, schema: GameArticleSchema},
            {name: GameType.name, schema: GameTypeSchema},
        ]),
        GameTypeModule,
        NestjsFormDataModule
    ],
    controllers: [GameArticleController],
    providers: [GameArticleService],
})
export class GameArticleModule {}
