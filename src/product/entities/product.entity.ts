import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
@Entity('product')
export class Product {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({example:"Olma", description:"Product nomi"})
  @Field()
  @Column()
  name: string;

  @ApiProperty({example:2345, description:"Product narxi"})
  @Field()
  @Column()
  price: number;

  @ApiProperty({example:"Bu qizil olma", description:"Product haqida ma'lumot"})
  @Field()
  @Column()
  description: string;

  @Field()
  @CreateDateColumn()
  createAt: Date;

  @Field()
  @UpdateDateColumn()
  updateAt: Date;

  
  @ManyToOne((type) => Category, (category) => category.product)
  @Field((type) => Category)
  category: Category;
}
