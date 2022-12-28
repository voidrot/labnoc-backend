import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type CronJobDocument = HydratedDocument<CronJob>

@Schema()
export class CronJob {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  cronExp: string

  @Prop({ default: true })
  enabled: boolean

  @Prop({ required: true })
  jobKey: string

  @Prop({ default: Date.now() })
  createdAt: Date

  @Prop({ default: Date.now() })
  updatedAt: Date
}

export const CronJobSchema = SchemaFactory.createForClass(CronJob)
