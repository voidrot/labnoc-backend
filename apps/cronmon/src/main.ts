import { NestFactory } from '@nestjs/core'
import { CronmonModule } from './cronmon.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CronmonModule,
    {
      transport: Transport.NATS,
      options: {
        servers: process.env.NATS_URI
      }
    }
  )
  await app.listen()
}
bootstrap()
