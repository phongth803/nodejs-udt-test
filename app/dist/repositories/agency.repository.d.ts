import { DefaultCrudRepository } from '@loopback/repository';
import { PostgresDbDataSource } from '../datasources';
import { Agency, AgencyRelations } from '../models';
export declare class AgencyRepository extends DefaultCrudRepository<Agency, typeof Agency.prototype.agencyID, AgencyRelations> {
    constructor(dataSource: PostgresDbDataSource);
}
