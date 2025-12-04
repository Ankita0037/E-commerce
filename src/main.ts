import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

/**
 * Bootstrap the NestJS application
 * Configures global pipes, filters, and starts the server
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation pipe for input validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip non-whitelisted properties
      forbidNonWhitelisted: true, // Throw error for non-whitelisted properties
      transform: true, // Auto-transform payloads to DTO instances
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Enable global exception filter for consistent error handling
  app.useGlobalFilters(new HttpExceptionFilter());

  // Enable CORS for frontend integration
  app.enableCors();

  // Set global API prefix
  app.setGlobalPrefix('api');

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`🚀 E-commerce API is running on: http://localhost:${port}/api`);
}

bootstrap();
