import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './entities/post.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts) private readonly postRepo: Repository<Posts>,
  ) {}

  create(createPostDto: CreatePostDto, author: User) {
    const newPost = this.postRepo.create({ ...createPostDto, author });
    return this.postRepo.save(newPost);
  }

  findAll() {
    return this.postRepo.find({relations:['author']});
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
