import { PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdatePostDto extends PartialType(CreatePostDto) {}
