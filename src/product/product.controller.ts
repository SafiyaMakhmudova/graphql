import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Product } from './entities/product.entity';
import { Category } from '../category/entities/category.entity';

@ApiTags("Product")
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  
  @ApiOperation({ summary: 'Create Product' })
  @ApiResponse({ status: 201, type: Product })
  @Post()
  create(@Body() createProductDto: CreateProductDto, category:Category) {
    return this.productService.create(createProductDto, category);
  }

  
  @ApiOperation({ summary: 'find all Product' })
  @ApiResponse({ status: 200, type: Product })
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @ApiOperation({ summary: 'find by id Product' })
  @ApiResponse({ status: 200, type: Product })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  
  @ApiOperation({ summary: 'update by id Product' })
  @ApiResponse({ status: 201, type: Product })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  
  @ApiOperation({ summary: 'delete by id Product' })
  @ApiResponse({ status: 200, type: Number })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
