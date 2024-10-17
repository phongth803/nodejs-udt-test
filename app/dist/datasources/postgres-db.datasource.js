"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'PostgresDB',
    connector: 'postgresql',
    host: 'postgresdb.c9gkoegkiabb.ap-southeast-2.rds.amazonaws.com',
    port: 5432,
    user: 'phong',
    password: '12345678',
    database: 'postgres',
    ssl: {
        rejectUnauthorized: false,
    },
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let PostgresDbDataSource = class PostgresDbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.PostgresDbDataSource = PostgresDbDataSource;
PostgresDbDataSource.dataSourceName = 'PostgresDB';
PostgresDbDataSource.defaultConfig = config;
exports.PostgresDbDataSource = PostgresDbDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.PostgresDB', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], PostgresDbDataSource);
//# sourceMappingURL=postgres-db.datasource.js.map