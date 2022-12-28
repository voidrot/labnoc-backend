import { Module } from '@nestjs/common'
import { HealthcheckController } from './healthcheck.controller'
import { HealthcheckService } from './healthcheck.service'
import { ConfigModule } from '@nestjs/config'
import { configSettingsDev, configSettingsProd } from '@app/config'

const configOpts =
  process.env.NODE_ENV === 'production' ? configSettingsProd : configSettingsDev
@Module({
  imports: [ConfigModule.forRoot(configOpts)],
  controllers: [HealthcheckController],
  providers: [HealthcheckService]
})
export class HealthcheckModule {}
