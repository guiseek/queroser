import {Logger, ValidationPipe, VersioningType} from '@nestjs/common'
import {NestFactory} from '@nestjs/core'
import {SwaggerModule} from '@nestjs/swagger'
import {AppModule} from './app.module'
import {docs} from './docs'

async function bootstrap() {
  const api = 'api'
  const port = process.env.PORT ?? 3000

  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix(api)

  app.useGlobalPipes(new ValidationPipe({transform: true}))

  app.enableVersioning({
    type: VersioningType.URI,
  })

  const document = SwaggerModule.createDocument(app, docs.config)
  SwaggerModule.setup(docs.prefix, app, document)

  await app
    .listen(port)
    .then(async () => Logger.log(`🚀 Running on ${await app.getUrl()}/${api}`))
}

bootstrap()
