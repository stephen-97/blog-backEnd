import {
    MinLength,
    MaxLength,
    IsNotEmpty,
    IsString,
    ArrayMaxSize,
    Validate, IsBase64, isArray
} from 'class-validator';
import {HasMimeType, IsFile, MemoryStoredFile} from "nestjs-form-data";
import { GameArticle} from "../../game-article/entities/game-article.entity";
import {GameArticleBlock} from "../entities/game-article-block.entity";

export class CreateGameArticleBlockDto {

    @IsString()
    @MinLength(5)
    @MaxLength(25)
    readonly title: string;

    @IsNotEmpty()
    readonly paragraph: string;

    @IsNotEmpty()
    readonly gameArticle: GameArticle;

    @IsFile()
    @IsNotEmpty()
    @IsBase64({each: true})
    @HasMimeType(['image/jpeg', 'image/png', 'image/webp'])
    @ArrayMaxSize(3)
    readonly images: MemoryStoredFile[];
}

