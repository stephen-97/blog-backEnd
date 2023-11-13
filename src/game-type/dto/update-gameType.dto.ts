import { typeNames} from "../schemas/gameType.schema";
import {IsNotEmpty, IsString} from '@nestjs/class-validator';
import {GameArticle} from "../../game-article/entities/game-article.entity";

export class UpdateGameTypeDto {
    @IsNotEmpty()
    @IsString()
    readonly name: typeNames;
    @IsNotEmpty()
    @IsString()
    readonly description: string;

    readonly gameArticle: [GameArticle];
}
