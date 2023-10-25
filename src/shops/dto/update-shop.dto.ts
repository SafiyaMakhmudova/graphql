import { PartialType } from '@nestjs/mapped-types';
import { CreateShopDto } from './create-shop.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UpdateShopDto extends PartialType(CreateShopDto) {
  @ApiProperty({ example: 'Uzum', description: 'Magazin nomi' })
  @Field({ nullable: true })
  @IsString()
  name?: string;

  @ApiProperty({ example: 'Qatortol', description: 'Magazin addressi' })
  @Field({ nullable: true })
  @IsString()
  address?: string;

  @ApiProperty({ example: 'Ozuq-Ovqat', description: 'Magazin turi' })
  @Field({ nullable: true })
  @IsString()
  type?: string;
}
