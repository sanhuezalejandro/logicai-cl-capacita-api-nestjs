import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'nestdb',
  entities: [
    join(__dirname, '..', 'database', 'entities', '**', '*.entity{.ts,.js}'),
  ],
  migrations: [
    join(__dirname, '..', 'database', 'migrations', '**', '*{.ts,.js}'),
  ],
  synchronize: process.env.NODE_ENV !== 'production', // Solo en desarrollo
  logging: process.env.NODE_ENV === 'development',
};

// DataSource para migraciones (CLI de TypeORM)
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'nestdb',
  entities: [
    join(__dirname, '..', 'database', 'entities', '**', '*.entity{.ts,.js}'),
  ],
  migrations: [
    join(__dirname, '..', 'database', 'migrations', '**', '*{.ts,.js}'),
  ],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
