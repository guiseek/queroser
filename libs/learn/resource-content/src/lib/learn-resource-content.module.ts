import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {dataSourceContent} from '@queroser/learn/data-source-content'
import {LearnResourceContentController} from './learn-resource-content.controller'
import {LearnResourceVideoContentController} from './learn-resource-video-content.controller'
import {LearnResourceVideoContentService} from './learn-resource-video-content.service'

@Module({
  imports: [TypeOrmModule.forFeature(dataSourceContent.entities())],
  controllers: [
    LearnResourceContentController,
    LearnResourceVideoContentController,
  ],
  providers: [
    LearnResourceVideoContentService,
    ...dataSourceContent.providers(),
  ],
})
export class LearnResourceContentModule {}
