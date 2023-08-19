import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {dataSourceContent} from '@queroser/learn/data-source-content'
import {LearnResourceContentController} from './learn-resource-content.controller'
import {LearnResourceVideoContentController} from './learn-resource-video-content.controller'
import {LearnResourceTextContentController} from './learn-resource-text-content.controller'
import {LearnResourceAudioContentController} from './learn-resource-audio-content.controller'
import {LearnResourceQuizContentController} from './learn-resource-quiz-content.controller'

@Module({
  imports: [TypeOrmModule.forFeature(dataSourceContent.entities())],
  controllers: [
    LearnResourceContentController,
    LearnResourceTextContentController,
    LearnResourceVideoContentController,
    LearnResourceAudioContentController,
    LearnResourceQuizContentController,
  ],
  providers: [...dataSourceContent.providers()],
})
export class LearnResourceContentModule {}
