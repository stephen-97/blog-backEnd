import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Types} from 'mongoose';
import {GameType} from "../../game-type/schemas/gameType.schema";

@Schema({
    timestamps: true,
})
export class GameArticle {
    @Prop({type: Number, required: true, unique: true, min: 5, max: 40})
    title: string;

    @Prop({type: String, required: true, unique: true, min: 20})
    content: string;

    @Prop({type: [Types.ObjectId], required: true, ref: 'GameType'})
    gameType: [GameType];
}

export const GameArticleSchema = SchemaFactory.createForClass(GameArticle);

