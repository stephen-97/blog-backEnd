import {typeNames} from "../schemas/gameType.schema";
import {IsNotEmpty, IsString} from '@nestjs/class-validator';
import {GameArticle} from "../../game-article/entities/game-article.entity";

export class CreateGameTypeDto {
    @IsString()
    @IsNotEmpty()
    readonly name: typeNames;
    @IsString()
    @IsNotEmpty()
    readonly description: string;

    readonly gameArticle: [GameArticle];
}
