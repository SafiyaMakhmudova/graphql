import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiProperty({example:"Olma", description:"Product nomi"})
    @Field({nullable: true})
    @IsString()
    @IsNotEmpty()
    name?: string;
  
    @ApiProperty({example:2345, description:"Product narxi"})
    @Field({nullable: true})
    @IsNumber()
    price?: number;
  
    @ApiProperty({example:"Bu qizil olma", description:"Product haqida ma'lumot"})
    @Field({nullable: true})
    @IsString()
    description?: string;
  
  
}
