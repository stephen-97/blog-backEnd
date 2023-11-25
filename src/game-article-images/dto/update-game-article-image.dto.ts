import { PartialType } from '@nestjs/mapped-types';
import { CreateGameArticleImageDto } from './create-game-article-image.dto';

export class UpdateGameArticleImageDto extends PartialType(CreateGameArticleImageDto) {}
