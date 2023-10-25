import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
@Entity('shops')
export class Shop {
    @ApiProperty({example:2, description:"Unical id"})
    @Field(()=> ID)
    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty({example:"Uzum", description:"Magazin nomi"})
    @Field()
    @Column()
    name: string

    @ApiProperty({example:"Qatortol", description:"Magazin addressi"})
    @Field()
    @Column()
    address: string

    @ApiProperty({example:"Ozuq-Ovqat", description:"Magazin turi"})
    @Field()
    @Column()
    type: string
    
    
}
