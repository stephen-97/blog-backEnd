import {Module} from '@nestjs/common';
import {GameArticleService} from './game-article.service';
import {GameArticleController} from './game-article.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {GameArticle, GameArticleSchema} from "./entities/game-article.entity";

@Module({
    imports: [MongooseModule.forFeature([{name: GameArticle.name, schema: GameArticleSchema}])],
    controllers: [GameArticleController],
    providers: [GameArticleService],
})
export class GameArticleModule {}
