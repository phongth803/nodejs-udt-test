import { DefaultCrudRepository } from '@loopback/repository';
import { PostgresDbDataSource } from '../datasources';
import { Billing, BillingRelations } from '../models';
export declare class BillingRepository extends DefaultCrudRepository<Billing, typeof Billing.prototype.billingId, BillingRelations> {
    constructor(dataSource: PostgresDbDataSource);
}
