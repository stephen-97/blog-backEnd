import { PartialType } from '@nestjs/mapped-types';
import { CreateGameArticleDto } from './create-game-article.dto';

export class UpdateGameArticleDto extends PartialType(CreateGameArticleDto) {


}
