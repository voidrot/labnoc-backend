import { Controller, Get } from '@nestjs/common'
import { CronmonService } from './cronmon.service'

@Controller()
export class CronmonController {
  constructor(private readonly cronmonService: CronmonService) {}

  @Get()
  getHello(): string {
    return this.cronmonService.getHello()
  }
}
