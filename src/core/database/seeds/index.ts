import dataSource from '../../../core/config/database.config';
import { seedMessages } from './message.seed';

async function runSeeds() {
  try {
    console.log('🌱 Starting database seeding...');

    await dataSource.initialize();
    console.log('✓ Database connection established');

    // Ejecutar todos los seeders
    await seedMessages(dataSource);

    console.log('🎉 Seeding completed successfully!');
    await dataSource.destroy();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during seeding:', error);
    await dataSource.destroy();
    process.exit(1);
  }
}

void runSeeds();
