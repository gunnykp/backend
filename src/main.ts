import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import nocache from 'nocache';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // เพิ่มการตั้งค่า CORS
  app.enableCors({
    origin: 'http://localhost:8081', // ระบุเฉพาะโดเมนที่อนุญาต
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  // เพิ่มการใช้งาน helmet
  app.use(helmet());

  // ปิดการใช้งานแคช
  app.use(nocache());

  await app.listen(3000);
}
bootstrap();
