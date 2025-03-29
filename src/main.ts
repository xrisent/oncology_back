import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; // Импортируем нужные модули
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3002'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    credentials: true,
    allowedHeaders: ['Authorization', 'Content-Type', 'Cookie'],
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // Настройка Swagger
  const config = new DocumentBuilder()
    .setTitle('Oncology API') // Заголовок документации
    .setDescription('The oncology API description') // Описание API
    .setVersion('1.0') // Версия API
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token', // Имя для схемы авторизации
    )
    .build(); // Строим конфигурацию документации

  const document = SwaggerModule.createDocument(app, config); // Создание документации
  SwaggerModule.setup('api', app, document); // Разворачиваем документацию по адресу /api

  await app.listen(3002); 
}

bootstrap();
