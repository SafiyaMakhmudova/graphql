import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateProductDto {
  
  @ApiProperty({example:"Olma", description:"Product nomi"})
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({example:2345, description:"Product narxi"})
  @Field()
  @IsNumber()
  price: number;

  @ApiProperty({example:"Bu qizil olma", description:"Product haqida ma'lumot"})
  @Field()
  @IsString()
  description: string;
}
