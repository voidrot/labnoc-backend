import { NestFactory } from '@nestjs/core'
import { SchedulerModule } from './scheduler.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SchedulerModule,
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
