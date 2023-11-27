import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Types} from 'mongoose';
import {GameType} from "../../game-type/schemas/gameType.schema";

@Schema({
    timestamps: true,
})
export class GameArticle {
    @Prop({type: String, required: true, unique: true, min: 5, max: 40})
    title: string;

    @Prop({type: String, required: true, unique: true, min: 15})
    content: string;

    @Prop({
        type: [Types.ObjectId],
        required: true,
        ref: 'GameType',
        minLength: 1,
    })
    gameType: GameType[];

    @Prop({type: Boolean, default: false})
    enabled: boolean

    @Prop({type: String})
    mainImage: string

    @Prop({type: String})
    images: string[]
}

export const GameArticleSchema = SchemaFactory.createForClass(GameArticle);

