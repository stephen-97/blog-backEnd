import {IsBase64, IsNotEmpty, Min, MinLength, MaxLength} from 'class-validator';
import {Type} from "class-transformer";
import {GameArticle} from "../../game-article/entities/game-article.entity";


export class CreateGameArticleImageDto {

    @IsBase64()
    readonly base64Data: string;

    @IsNotEmpty()
    @Type(() => GameArticle)
    @Min(1)
    @MinLength(1)
    @MaxLength(1)
    readonly gameTypeName: GameArticle;

}