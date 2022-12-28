import { Module } from '@nestjs/common'
import { SchedulerController } from './scheduler.controller'
import { SchedulerService } from './scheduler.service'
import { ScheduleModule } from '@nestjs/schedule'
import { MongooseModule } from '@nestjs/mongoose'
import { configSettingsDev, configSettingsProd } from '@app/config'
import { ConfigModule } from '@nestjs/config'

const configOpts =
  process.env.NODE_ENV === 'production' ? configSettingsProd : configSettingsDev
@Module({
  imports: [
    ConfigModule.forRoot(configOpts),
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, { dbName: 'labnoc' })
  ],
  controllers: [SchedulerController],
  providers: [SchedulerService]
})
export class SchedulerModule {}
