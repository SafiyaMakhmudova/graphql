import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateShopDto {
  @ApiProperty({ example: 'Uzum', description: 'Magazin nomi' })
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Qatortol', description: 'Magazin addressi' })
  @Field()
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: 'Ozuq-Ovqat', description: 'Magazin turi' })
  @Field()
  @IsString()
  @IsNotEmpty()
  type: string;
}
