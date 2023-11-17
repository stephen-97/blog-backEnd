import {IsArray, IsEnum, MinLength, MaxLength, IsNotEmpty, IsString, Max, Min} from 'class-validator';
import {GameType} from "../../game-type/schemas/gameType.schema";
import {typeNames} from "../../game-type/schemas/gameType.schema";

export class CreateGameArticleDto {

    @IsString()
    @MinLength(3)
    @MaxLength(40)
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @MinLength(5)
    @MaxLength(500)
    @IsNotEmpty()
    readonly content: string;

    @IsNotEmpty()
    @IsArray()
    @IsEnum(typeNames, {each: true})
    readonly gameTypeName: Array<GameType>;
}

