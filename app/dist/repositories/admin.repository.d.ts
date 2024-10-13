import { DefaultCrudRepository } from '@loopback/repository';
import { PostgresDbDataSource } from '../datasources';
import { Admin, AdminRelations } from '../models';
export declare class AdminRepository extends DefaultCrudRepository<Admin, typeof Admin.prototype.adminId, AdminRelations> {
    constructor(dataSource: PostgresDbDataSource);
}
