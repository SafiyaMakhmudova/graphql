import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import {  ID,ObjectType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Posts } from '../../posts/entities/post.entity';


@ObjectType()
@Entity('users')
export class User {
  @Field(()=> ID)
  @PrimaryGeneratedColumn()
  id: number;

  
  @ApiProperty({example:"Salima", description:"Userni ismi"})
  @Field({nullable: true})
  @Column({ nullable: true })
  name: string;

  @ApiProperty({example:"salima@mail.uz", description:"Userni emaili"})
  @Field()
  @Column()
  email: string;
  
  @Field()
  @CreateDateColumn()
  createAt: Date;
  
  @Field()
  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany((type)=> Posts, (post)=> post.author)
  @Field((type)=> [Posts])
  posts: Posts
}