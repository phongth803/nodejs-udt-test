import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDbDataSource} from '../datasources';
import {Billing, BillingRelations} from '../models';

export class BillingRepository extends DefaultCrudRepository<
  Billing,
  typeof Billing.prototype.billingId,
  BillingRelations
> {
  constructor(
    @inject('datasources.PostgresDB') dataSource: PostgresDbDataSource,
  ) {
    super(Billing, dataSource);
  }
}
