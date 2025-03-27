import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; // Импортируем нужные модули

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Настройка Swagger
  const config = new DocumentBuilder()
    .setTitle('Oncology API') // Заголовок документации
    .setDescription('The oncology API description') // Описание API
    .setVersion('1.0') // Версия API
    .addBearerAuth()
    .build(); // Строим конфигурацию документации

  const document = SwaggerModule.createDocument(app, config); // Создание документации
  SwaggerModule.setup('api', app, document); // Разворачиваем документацию по адресу /api

  await app.listen(3002); // Запуск приложения
}

bootstrap();
