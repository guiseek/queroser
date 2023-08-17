import {PartialType} from '@nestjs/mapped-types'
import {CreateForumResourceFaqDto} from './create-forum-resource-faq.dto'

export class UpdateForumResourceFaqDto extends PartialType(
  CreateForumResourceFaqDto
) {}
