import {Question3Application} from './dist'; // thay đổi theo tên ứng dụng của bạn
import {ApplicationConfig} from '@loopback/core';

export async function migrate(args: string[]) {
  const config: ApplicationConfig = {
    rest: {
      port: +(process.env.PORT ?? 3000),
      host: process.env.HOST ?? 'localhost',
    },
  };

  const app = new Question3Application(config);
  await app.boot();

  console.log('Migrating schema...');
  await app.migrateSchema({existingSchema: 'alter'});
  console.log('Migration complete.');

  process.exit(0);
}

migrate(process.argv).catch(err => {
  console.error('Cannot migrate database schema', err);
  process.exit(1);
});
