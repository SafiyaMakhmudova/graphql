import { Field, ID, ObjectType } from '@nestjs/graphql';
import { type } from 'os';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@ObjectType()
@Entity('posts')
export class Posts {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  content: string;

  @ManyToOne((type) => User, (author) => author.posts)
  @Field((type) => User)
  author: User;
}
