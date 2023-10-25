import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @ApiProperty({example:"Mevalar", description:"Kategori nomi"})
    @Field({nullable: true})
    @IsString()
    name?: string
}
