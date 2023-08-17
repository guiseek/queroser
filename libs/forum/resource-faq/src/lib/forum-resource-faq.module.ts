import {Module} from '@nestjs/common'
import {ForumResourceFaqService} from './forum-resource-faq.service'
import {ForumResourceFaqController} from './forum-resource-faq.controller'

@Module({
  controllers: [ForumResourceFaqController],
  providers: [ForumResourceFaqService],
})
export class ForumResourceFaqModule {}
