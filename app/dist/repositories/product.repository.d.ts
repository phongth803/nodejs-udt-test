import { DefaultCrudRepository } from '@loopback/repository';
import { PostgresDbDataSource } from '../datasources';
import { Product, ProductRelations } from '../models';
export declare class ProductRepository extends DefaultCrudRepository<Product, typeof Product.prototype.productId, ProductRelations> {
    constructor(dataSource: PostgresDbDataSource);
}
