import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Resolver, Query, Args, Mutation, ID } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { CategoryResolver } from '../category/category.resolver';

@Resolver('product')
export class ProductResolver {
  constructor(
    private readonly productService: ProductService,
    private readonly categoryResolver: CategoryResolver,
  ) {}

  @Query(() => [Product])
  findAllProduct(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Query(() => Product)
  findOneProduct(@Args('id') id: number): Promise<Product> {
    return this.productService.findOne(+id);
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('createProduct') createProductDto: CreateProductDto,
    @Args('categoryId') categoryId: number,
  ): Promise<Product> {
    const category = await this.categoryResolver.findOneCategory(categoryId);
    return this.productService.create(createProductDto, category);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('id') id: number,
    @Args('updateProduct') updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.update(+id, updateProductDto);
  }

  @Mutation(() => Number)
  removeProduct(@Args('id', { type: () => ID }) id: number): Promise<number> {
    return this.productService.remove(+id);
  }
}
