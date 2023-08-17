import {DocumentBuilder} from '@nestjs/swagger'

export const config = new DocumentBuilder()
  .setTitle('API REST')
  .setDescription('queroser.dev')
  .setContact('Guilherme', 'https://guiseek.dev', 'email@guiseek.dev')
  .setVersion('1.0')
  .build()
