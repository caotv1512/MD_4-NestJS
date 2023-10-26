import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log(
    `app listen on port: http://localhost:${process.env.APP_PORT || 3000}`,
  );
}
bootstrap();
