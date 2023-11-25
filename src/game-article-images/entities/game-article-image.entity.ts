

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Types} from "mongoose";
import {GameArticle} from "../../game-article/entities/game-article.entity";


@Schema({
    timestamps: true,
})
export class GameArticleImage {
    @Prop({required: true, unique: true, minlength: 0, maxlength: 10})
    source: string[];

    @Prop({
        type: [Types.ObjectId],
        required: true,
        ref: 'GameType',
        length: 1,
    })
    gameType: GameArticle;
}

export const GameArticleImageSchema = SchemaFactory.createForClass(GameArticleImage);

