import { Field ,InputType} from "@nestjs/graphql";
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';


@InputType()
export class UpdateUserDto{
  @ApiProperty({example:"Salima", description:"Userni ismi"})
  @Field({nullable: true})
  @IsString()
  @IsNotEmpty()
  name?: string;

  
  @ApiProperty({example:"salima@mail.uz", description:"Userni emaili"})
  @Field({nullable: true})
  @IsEmail()
  @IsNotEmpty()
  email?: string;
}
