import { typeNames} from "../schemas/gameType.schema";
import {IsNotEmpty, IsString} from '@nestjs/class-validator';

export class UpdateGameTypeDto {
    @IsNotEmpty()
    @IsString()
    readonly name: typeNames;
    @IsNotEmpty()
    @IsString()
    readonly description: string;
}
