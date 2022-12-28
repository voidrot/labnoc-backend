import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsUUID } from "class-validator";

export class CreateResultDto {
  @IsUUID(4)
  id: string

  @IsNotEmpty()
  status: string

  @IsNumber()
  resultCode: number

  @IsOptional()
  output: string

  @IsNumber()
  startTime: number

  @IsNumber()
  endTime: number

}
