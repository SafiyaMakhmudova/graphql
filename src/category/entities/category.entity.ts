import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@ObjectType()
@Entity('category')
export class Category {
  @ApiProperty({ example: 1, description: 'Unical Id' })
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Mevalar', description: 'Kategori nomi' })
  @Field()
  @Column()
  name: string;

  @Field()
  @CreateDateColumn()
  createAt: Date;

  @Field()
  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany((type) => Product, (product) => product.category)
  @Field((type) => [Product])
  product: Product;
}
