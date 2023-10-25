import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductResolver } from './product.resolver';
import { Category } from '../category/entities/category.entity';
import { CategoryService } from '../category/category.service';
import { CategoryResolver } from '../category/category.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Product, Category])],
  controllers: [ProductController],
  providers: [ProductService, ProductResolver, CategoryService, CategoryResolver],
})
export class ProductModule {}
