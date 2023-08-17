import {PartialType} from '@nestjs/mapped-types'
import {CreateLearnResourceContentDto} from './create-learn-resource-content.dto'

export class UpdateLearnResourceContentDto extends PartialType(
  CreateLearnResourceContentDto
) {}
