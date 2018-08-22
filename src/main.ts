import { NestFactory } from '@nestjs/core';

import { ApplicationModule } from './app.module';

import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  const port = 3300;
  app.use(cors());
  await app.listen(port);
}

bootstrap();
