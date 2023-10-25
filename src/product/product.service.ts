import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Category } from '../category/entities/category.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}


  create(createProductDto: CreateProductDto, category: Category): Promise<Product> {
    const newProduct = this.productRepo.create({...createProductDto, category})
    return this.productRepo.save(newProduct);
  }

  findAll(): Promise<Product[]> {
    return this.productRepo.find({relations:['category']});
  }

  findOne(id: number): Promise<Product> {
    return this.productRepo.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    await this.productRepo.update({ id }, { ...updateProductDto });
    return this.findOne(id);
  }

  async remove(id: number): Promise<number> {
    await this.productRepo.delete({ id });
    return id;
  }
}
