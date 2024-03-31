import { PartialType } from '@nestjs/mapped-types';
import { CreateGameArticleBlockDto } from './create-game-article-block.dto';

export class UpdateGameArticleBlockDto extends PartialType(CreateGameArticleBlockDto) {}
