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
    IsBase64
} from 'class-validator';
import {HasMimeType, IsFile, MemoryStoredFile} from "nestjs-form-data";
import {GameType} from "../../game-type/schemas/gameType.schema";
import {Type} from "class-transformer";
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
    readonly gameTypeName: typeNames[];

    @IsFile()
    @IsNotEmpty()
    @HasMimeType(['image/jpeg', 'image/png'])
    readonly mainImage: MemoryStoredFile;

}

