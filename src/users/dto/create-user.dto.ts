import { Field ,InputType} from "@nestjs/graphql";
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateUserDto {
  
  @ApiProperty({example:"Salima", description:"Userni ismi"})
  @Field({nullable: true})
  @IsString()
  @IsNotEmpty()
  name: string;
  

  @ApiProperty({example:"salima@mail.uz", description:"Userni emaili"})
  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
