import { Module } from '@nestjs/common'
import { CronmonController } from './cronmon.controller'
import { CronmonService } from './cronmon.service'
import { configSettingsDev, configSettingsProd } from '@app/config'
import { ConfigModule } from '@nestjs/config'

const configOpts =
  process.env.NODE_ENV === 'production' ? configSettingsProd : configSettingsDev

@Module({
  imports: [ConfigModule.forRoot(configOpts)],
  controllers: [CronmonController],
  providers: [CronmonService]
})
export class CronmonModule {}
