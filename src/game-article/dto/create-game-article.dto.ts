import {IsArray, ValidateNested, ArrayMinSize, MinLength, MaxLength, IsNotEmpty, IsString, Max, Min} from 'class-validator';
import {GameType} from "../../game-type/schemas/gameType.schema";
import {Type} from "class-transformer";

export class CreateGameArticleDto {

    @IsString()
    @MinLength(5)
    @MaxLength(25)
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @MinLength(10)
    @MaxLength(500)
    @IsNotEmpty()
    readonly content: string;

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({each: true})
    @ArrayMinSize(1)
    @Type(() => GameType)
    readonly gameTypeName: GameType[];
}

