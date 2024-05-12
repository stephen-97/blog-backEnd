import {
    IsArray,
    ValidateNested,
    ArrayMinSize,
    MinLength,
    MaxLength,
    IsNotEmpty,
    IsString,
    Max,
    Min,
    IsBase64, ArrayMaxSize
} from 'class-validator';
import {HasMimeType, IsFile, MemoryStoredFile} from "nestjs-form-data";
import {GameType} from "../../game-type/schemas/gameType.schema";
import {Type} from "class-transformer";
import {GameArticleBlock} from "../../game-article-block/entities/game-article-block.entity";
import {typeNames} from "../../game-type/schemas/gameType.schema";

export class CreateGameArticleDto {

    @IsString()
    @MinLength(5)
    @MaxLength(25)
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    @ArrayMinSize(1)
    readonly gameTypes: typeNames[];


    @IsNotEmpty()
    @IsArray()
    @ArrayMinSize(1)
    readonly articleBlocks: GameArticleBlock[];

    @IsNotEmpty()
    @IsBase64({each: true})
    readonly image: MemoryStoredFile;

}

