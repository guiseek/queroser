import {IsEnum, IsInt, IsOptional, Max, Min} from 'class-validator'
import {PageOptions, Order} from '@queroser/shared/util-data'
import {ApiPropertyOptional} from '@nestjs/swagger'
import {Type} from 'class-transformer'

export class PageOptionsDto implements PageOptions {
  @ApiPropertyOptional({enum: Order, default: Order.ASC})
  @IsEnum(Order)
  @IsOptional()
  readonly order?: Order = Order.ASC

  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
  })
  @Type(() => Number)
  @Min(1)
  @IsInt()
  @IsOptional()
  readonly page = 1

  @ApiPropertyOptional({
    minimum: 1,
    maximum: 50,
    default: 10,
  })
  @Type(() => Number)
  @Min(1)
  @Max(50)
  @IsInt()
  @IsOptional()
  readonly take = 10

  get skip() {
    return (this.page - 1) * this.take
  }
}
