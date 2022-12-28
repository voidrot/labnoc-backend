import { NestFactory } from '@nestjs/core'
import { HealthcheckModule } from './healthcheck.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    HealthcheckModule,
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
