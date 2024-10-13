import { DefaultCrudRepository } from '@loopback/repository';
import { PostgresDbDataSource } from '../datasources';
import { Cart, CartRelations } from '../models';
export declare class CartRepository extends DefaultCrudRepository<Cart, typeof Cart.prototype.cartID, CartRelations> {
    constructor(dataSource: PostgresDbDataSource);
}
