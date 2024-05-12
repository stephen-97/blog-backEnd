import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Types} from 'mongoose';
import {GameType} from "../../game-type/schemas/gameType.schema";
import {GameArticleBlock} from "../../game-article-block/entities/game-article-block.entity";

@Schema({
    timestamps: true,
})
export class GameArticle {
    @Prop({type: String, required: true, unique: true, min: 5, max: 40})
    title: string;


    @Prop({
        type: [Types.ObjectId],
        required: true,
        ref: 'GameType',
        minLength: 1,
    })
    gameType: GameType[];

    @Prop({
        type: [Types.ObjectId],
        required: true,
        ref: 'GameArticleBlock',
        minLength: 1,
    })
    articleBlocks: GameArticleBlock[];

    @Prop({type: Boolean, default: false})
    enabled: boolean

    @Prop({type: String})
    mainImage: string


}

export const GameArticleSchema = SchemaFactory.createForClass(GameArticle);

