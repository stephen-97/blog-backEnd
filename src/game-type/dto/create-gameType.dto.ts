import {typeNames} from "../schemas/gameType.schema";
import {IsNotEmpty, IsString} from '@nestjs/class-validator';

export class CreateGameTypeDto {
    @IsString()
    @IsNotEmpty()
    readonly name: typeNames;
    @IsString()
    @IsNotEmpty()
    readonly description: string;
}
