import { Injectable } from '@nestjs/common'

@Injectable()
export class CronmonService {
  getHello(): string {
    return 'Hello World!'
  }
}
