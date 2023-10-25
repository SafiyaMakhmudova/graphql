import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';


@Resolver('Users')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => User)
  findOneUser(@Args('id') id: number): Promise<User> {
    return this.usersService.findOne(+id);
  }

  @Mutation(() => User)
  createUser(@Args('createUser') createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Mutation(() => User)
  updateUser(
    @Args('id') id: number,
    @Args('updateUser') updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(id, updateUserDto);
  }

  @Mutation(() => Number)
  remove(@Args('id', { type: () => ID }) id: number): Promise<number> {
    return this.usersService.remove(+id);
  }
}
