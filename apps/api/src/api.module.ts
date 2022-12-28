import { Module } from '@nestjs/common'
import { ApiController } from './api.controller'
import { ApiService } from './api.service'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { ConfigModule } from '@nestjs/config'
import { configSettingsDev, configSettingsProd } from '@app/config'
import { TerminusModule } from "@nestjs/terminus";
import { HttpModule } from "@nestjs/axios";
import { AuthModule } from './auth/auth.module';
import { HealthModule } from './health/health.module';
import { HealthController } from "./health/health.controller";
import { AuthController } from "./auth/auth.controller";
import { CronjobsModule } from './cronjobs/cronjobs.module';

const configOpts =
  process.env.NODE_ENV === 'production' ? configSettingsProd : configSettingsDev

@Module({
  imports: [
    ConfigModule.forRoot(configOpts),
    TerminusModule,
    HttpModule,
    ClientsModule.register([
      {
        name: 'CRONMON_SERVICE',
        transport: Transport.NATS,
        options: { servers: process.env.NATS_URI }
      },
      {
        name: 'HEALTHCHECK_SERVICE',
        transport: Transport.NATS,
        options: { servers: process.env.NATS_URI }
      },
      {
        name: 'SCHEDULER_SERVICE',
        transport: Transport.NATS,
        options: { servers: process.env.NATS_URI }
      }
    ]),
    AuthModule,
    HealthModule,
    CronjobsModule
  ],
  controllers: [ApiController, HealthController, AuthController],
  providers: [ApiService]
})
export class ApiModule {}
