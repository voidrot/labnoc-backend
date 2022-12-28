import { NestFactory } from '@nestjs/core'
import { ApiModule } from './api.module'
import * as session from 'express-session'
import * as connectRedis from 'connect-redis'
import Redis from 'ioredis'
import { ValidationPipe } from "@nestjs/common";

let RedisStore = connectRedis(session)
let redisClient = new Redis(process.env.REDIS_HOST || '127.0.0.1:6379')
async function bootstrap() {
  const app = await NestFactory.create(
    ApiModule,
  )
  app.useGlobalPipes(new ValidationPipe({whitelist: true}))
  app.use(
    session({
      store: new RedisStore(new RedisStore({client: redisClient})),
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false
    })
  )

  await app.listen(3000, '0.0.0.0')
}
bootstrap()
