import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:5173',  // ✅ Allow frontend origin
    credentials: true,  // ✅ Allow cookies & authorization headers
    allowedHeaders: [
      'Authorization',
      'X-Auth-Token',
      'Content-Type',
      'Accept'
    ],  // ✅ Ensure headers are allowed
    exposedHeaders: ['Authorization', 'X-Auth-Token'], // ✅ Allow reading token headers
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // ✅ Allow all required HTTP methods
  });

  await app.listen(3000);
}
bootstrap();
