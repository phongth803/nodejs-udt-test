import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'PostgresDB',
  connector: 'postgresql',
  host: 'postgres_db',
  port: 5432,
  user: 'phong',
  password: '123456',
  database: 'ecommerce',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PostgresDbDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'PostgresDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.PostgresDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
