import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDbDataSource} from '../datasources';
import {Admin, AdminRelations} from '../models';

export class AdminRepository extends DefaultCrudRepository<
  Admin,
  typeof Admin.prototype.adminId,
  AdminRelations
> {
  constructor(
    @inject('datasources.PostgresDB') dataSource: PostgresDbDataSource,
  ) {
    super(Admin, dataSource);
  }
}
