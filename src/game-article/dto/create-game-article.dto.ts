import {IsArray, IsEnum, IsNotEmpty, IsString, Max, Min} from 'class-validator';
import {GameType} from "../../game-type/schemas/gameType.schema";
import {typeNames} from "../../game-type/schemas/gameType.schema";

export class CreateGameArticleDto {

    @IsString()
    @Min(3)
    @Max(40)
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    readonly content: string;

    @IsNotEmpty()
    @IsArray()
    @IsEnum(typeNames, {each: true})
    readonly gameTypeName: Array<GameType>;
}

