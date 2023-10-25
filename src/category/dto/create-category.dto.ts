
import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCategoryDto {
    
    @ApiProperty({example:"Mevalar", description:"Kategori nomi"})
    @Field()
    @IsString()
    @IsNotEmpty()
    name: string
}
