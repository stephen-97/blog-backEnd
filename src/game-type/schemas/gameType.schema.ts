import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
    @Prop({required: true, unique: true, min: 3, max: 20})
    name: typeNames;

    @Prop()
    description: string;
}

export const GameTypeSchema = SchemaFactory.createForClass(GameType);

