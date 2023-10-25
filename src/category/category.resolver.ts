import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category])
  findAllCategoyr(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Query(() => Category)
  findOneCategory(@Args('id') id: number): Promise<Category> {
    return this.categoryService.findOne(+id);
  }

  @Mutation(() => Category)
  createCategory(
    @Args('createCategory') createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.create(createCategoryDto);
  }

  @Mutation(() => Category)
  updateCategory(
    @Args('id') id: number,
    @Args('updateCategory') updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Mutation(() => Number)
  removeCategory(@Args('id', { type: () => ID }) id: number): Promise<number> {
    return this.categoryService.remove(+id);
  }
}
