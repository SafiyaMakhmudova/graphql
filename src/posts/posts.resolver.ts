import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UsersResolver } from '../users/users.resolver';
import { Posts } from './entities/post.entity';
import { Query } from '@nestjs/graphql';

@Resolver('posts')
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly userResolver: UsersResolver,
  ) {}

  @Mutation(()=> Posts)
  async createPost(
    @Args('createPost') createPostDto: CreatePostDto,
    @Args('authorId') authorId:number,
  ):Promise<Posts>{
    const author = await this.userResolver.findOneUser(authorId);
    return this.postsService.create(createPostDto, author);
  }

  @Query(()=>[Posts])
  findAllPosts(){
    return this.postsService.findAll()
  }

  // }
  // @Post()
  // create(@Body() createPostDto: CreatePostDto) {
  //   return this.postsService.create(createPostDto);
  // }

  // @Get()
  // findAll() {
  //   return this.postsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.postsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   return this.postsService.update(+id, updatePostDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postsService.remove(+id);
  // }
}
