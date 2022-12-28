import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class CronjobsService {
  constructor(
    @Inject('CRONMON_SERVICE') private client: ClientProxy
  ) {}
  postResult(payload: any): any {
    this.client.emit('cronjob_result', payload)
  }
}
