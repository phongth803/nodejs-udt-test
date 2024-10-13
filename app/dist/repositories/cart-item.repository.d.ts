import { DefaultCrudRepository } from '@loopback/repository';
import { PostgresDbDataSource } from '../datasources';
import { CartItem, CartItemRelations } from '../models';
export declare class CartItemRepository extends DefaultCrudRepository<CartItem, typeof CartItem.prototype.cartItemID, CartItemRelations> {
    constructor(dataSource: PostgresDbDataSource);
}
