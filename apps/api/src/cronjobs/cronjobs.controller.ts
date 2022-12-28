import { Body, Controller, Post } from "@nestjs/common";
import { CronjobsService } from "./cronjobs.service";
import { CreateResultDto } from "./dto/result.dto";

@Controller('cronjob')
export class CronjobsController {
  constructor(private readonly cronjobService: CronjobsService) {}

  @Post('/result')
  postResult(@Body() data: CreateResultDto): any {
    console.log(data)
    return this.cronjobService.postResult(data)
  }
}
