import { Injectable } from '@nestjs/common'

@Injectable()
export class HealthcheckService {
  getHello(): string {
    return 'Hello World!'
  }
}
