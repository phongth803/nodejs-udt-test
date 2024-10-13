import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDbDataSource} from '../datasources';
import {TransactionItem, TransactionItemRelations} from '../models';

export class TransactionItemRepository extends DefaultCrudRepository<
  TransactionItem,
  typeof TransactionItem.prototype.transactionItemId,
  TransactionItemRelations
> {
  constructor(
    @inject('datasources.PostgresDB') dataSource: PostgresDbDataSource,
  ) {
    super(TransactionItem, dataSource);
  }
}
