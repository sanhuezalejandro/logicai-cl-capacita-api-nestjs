export const appConfig = {
  port: parseInt(process.env.PORT || '3000'),
  globalPrefix: 'api',
  corsOrigins: process.env.CORS_ORIGINS?.split(',') || [
    'http://localhost:4200',
  ],
  environment: process.env.NODE_ENV || 'development',
};
