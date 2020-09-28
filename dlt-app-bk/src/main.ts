import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  var express = require('express');
  const cors = require('cors');
  const bodyParser = require('body-parser');
  
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  await app.listen(3000);
  
}
bootstrap();
