import { ShopsService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Shop } from './entities/shop.entity';

@Resolver('Shops')
export class ShopsResolver {
  constructor(private readonly shopsService: ShopsService) {}

  @Query(() => [Shop])
  findAllShop(): Promise<Shop[]> {
    return this.shopsService.findAll();
  }

  @Query(() => Shop)
  findOneShop(@Args('id') id: number): Promise<Shop> {
    return this.shopsService.findOne(+id);
  }

  @Mutation(() => Shop)
  createShop(@Args('createShop') createShopDto: CreateShopDto): Promise<Shop> {
    return this.shopsService.create(createShopDto);
  }

  @Mutation(() => Shop)
  updateShop(
    @Args('id') id: number,
    @Args('updateShop') updateShopDto: UpdateShopDto,
  ): Promise<Shop> {
    return this.shopsService.update(+id, updateShopDto);
  }

  @Mutation(() => Number)
  removeShop(@Args('id', { type: () => ID }) id: number): Promise<number> {
    return this.shopsService.remove(+id);
  }
}
