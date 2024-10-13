import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDbDataSource} from '../datasources';
import {CartItem, CartItemRelations} from '../models';

export class CartItemRepository extends DefaultCrudRepository<
  CartItem,
  typeof CartItem.prototype.cartItemID,
  CartItemRelations
> {
  constructor(
    @inject('datasources.PostgresDB') dataSource: PostgresDbDataSource,
  ) {
    super(CartItem, dataSource);
  }
}
