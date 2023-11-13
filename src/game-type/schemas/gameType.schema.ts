import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Types} from "mongoose";
import {GameArticle} from "../../game-article/entities/game-article.entity";

export enum typeNames {
    FPS = 'FPS',
    TPS = 'TPS',
    Adventure = 'Aventure',
    RPG = 'RPG',
}
@Schema({
    timestamps: true,
})
export class GameType {
    @Prop({required: true, unique: true, min: 3, max: 20, enum: typeNames})
    name: typeNames;

    @Prop()
    description: string;

    @Prop({type: [Types.ObjectId], ref: 'GameArticle'})
    gameArticle: [GameArticle];
}

export const GameTypeSchema = SchemaFactory.createForClass(GameType);

