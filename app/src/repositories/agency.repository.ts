import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDbDataSource} from '../datasources';
import {Agency, AgencyRelations} from '../models';

export class AgencyRepository extends DefaultCrudRepository<
  Agency,
  typeof Agency.prototype.agencyID,
  AgencyRelations
> {
  constructor(
    @inject('datasources.PostgresDB') dataSource: PostgresDbDataSource,
  ) {
    super(Agency, dataSource);
  }
}
