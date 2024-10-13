import { DefaultCrudRepository } from '@loopback/repository';
import { PostgresDbDataSource } from '../datasources';
import { Customer, CustomerRelations } from '../models';
export declare class CustomerRepository extends DefaultCrudRepository<Customer, typeof Customer.prototype.CustomerID, CustomerRelations> {
    constructor(dataSource: PostgresDbDataSource);
}
