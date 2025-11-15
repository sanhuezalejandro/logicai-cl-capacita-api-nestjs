import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { appConfig } from './core/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prefijo global para todas las rutas
  app.setGlobalPrefix(appConfig.globalPrefix);

  // Habilitar CORS para el frontend Angular
  app.enableCors({
    origin: appConfig.corsOrigins,
    credentials: true,
  });

  // Validación global
  app.useGlobalPipes(new ValidationPipe());

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API Capacitaciones')
    .setDescription('API de ejemplo con NestJS, PostgreSQL y TypeORM')
    .setVersion('1.0')
    .addTag('messages')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(appConfig.port);
  console.log(`🚀 Aplicación corriendo en: http://localhost:${appConfig.port}`);
  console.log(
    `📚 Documentación Swagger en: http://localhost:${appConfig.port}/api-docs`,
  );
  console.log(`🌍 Entorno: ${appConfig.environment}`);
}
void bootstrap();
