import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {dataSourceContent} from '@queroser/learn/data-source-content'
import {LearnResourceContentService} from './learn-resource-content.service'
import {LearnResourceContentController} from './learn-resource-content.controller'

@Module({
  imports: [TypeOrmModule.forFeature(dataSourceContent.entities())],
  controllers: [LearnResourceContentController],
  providers: [LearnResourceContentService, ...dataSourceContent.providers()],
})
export class LearnResourceContentModule {}
