
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Types} from 'mongoose';
import {GameArticle} from "../../game-article/entities/game-article.entity";

@Schema({
    timestamps: true,
})
export class GameArticleBlock {

    @Prop({type: String, required: true, unique: true, min: 5, max: 40})
    title: string;

    @Prop({type: String, required: true, unique: true, min: 15})
    paragraph: string;

    @Prop({
        type: [Types.ObjectId],
        required: true,
        ref: 'GameArticle',
    })
    gameType: GameArticle;

    @Prop({type: String})
    images: string[]
}

export const GameArticleSchema = SchemaFactory.createForClass(GameArticle);

