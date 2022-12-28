import { Module } from '@nestjs/common';
import { CronjobsController } from './cronjobs.controller';
import { CronjobsService } from './cronjobs.service';
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CRONMON_SERVICE',
        transport: Transport.NATS,
        options: { servers: process.env.NATS_URI }
      },
      ]
    )
  ],
  controllers: [CronjobsController],
  providers: [CronjobsService]
})
export class CronjobsModule {}
