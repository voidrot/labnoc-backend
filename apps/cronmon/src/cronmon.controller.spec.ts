import { Test, TestingModule } from '@nestjs/testing'
import { CronmonController } from './cronmon.controller'
import { CronmonService } from './cronmon.service'

describe('CronmonController', () => {
  let cronmonController: CronmonController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CronmonController],
      providers: [CronmonService]
    }).compile()

    cronmonController = app.get<CronmonController>(CronmonController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cronmonController.getHello()).toBe('Hello World!')
    })
  })
})
