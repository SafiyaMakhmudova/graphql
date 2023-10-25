import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShopsService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Shop } from './entities/shop.entity';

@ApiTags("shops")
@Controller('shops')
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @ApiOperation({ summary: 'Create Shop' })
  @ApiResponse({ status: 201, type: Shop })
  @Post()
  create(@Body() createShopDto: CreateShopDto) {
    return this.shopsService.create(createShopDto);
  }

  @ApiOperation({ summary: 'find all Shop' })
  @ApiResponse({ status: 200, type: Shop })
  @Get()
  findAll() {
    return this.shopsService.findAll();
  }

  @ApiOperation({ summary: 'find by id Shop' })
  @ApiResponse({ status: 200, type: Shop })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopsService.findOne(+id);
  }

  @ApiOperation({ summary: 'update by id Shop' })
  @ApiResponse({ status: 201, type: Shop })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopDto: UpdateShopDto) {
    return this.shopsService.update(+id, updateShopDto);
  }

  @ApiOperation({ summary: 'deley by id Shop' })
  @ApiResponse({ status: 200, type: Number })
  @Delete(':id')
  remove(@Param('id') id: number):Promise<number> {
    return this.shopsService.remove(+id);
  }
}
