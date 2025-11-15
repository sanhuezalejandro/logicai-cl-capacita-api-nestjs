import { DataSource } from 'typeorm';
import { dataSourceOptions } from './src/core/config/database.config';

export default new DataSource(dataSourceOptions);
