import { DefaultCrudRepository } from '@loopback/repository';
import { PostgresDbDataSource } from '../datasources';
import { TransactionItem, TransactionItemRelations } from '../models';
export declare class TransactionItemRepository extends DefaultCrudRepository<TransactionItem, typeof TransactionItem.prototype.transactionItemId, TransactionItemRelations> {
    constructor(dataSource: PostgresDbDataSource);
}
