import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDbDataSource} from '../datasources';
import {Cart, CartRelations} from '../models';

export class CartRepository extends DefaultCrudRepository<
  Cart,
  typeof Cart.prototype.cartID,
  CartRelations
> {
  constructor(
    @inject('datasources.PostgresDB') dataSource: PostgresDbDataSource,
  ) {
    super(Cart, dataSource);
  }
}
