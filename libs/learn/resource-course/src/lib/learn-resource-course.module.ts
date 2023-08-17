import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {dataSourceCourse} from '@queroser/learn/data-source-course'
import {LearnResourceCourseController} from './learn-resource-course.controller'

@Module({
  imports: [TypeOrmModule.forFeature(dataSourceCourse.entities())],
  controllers: [LearnResourceCourseController],
  providers: [...dataSourceCourse.providers()],
})
export class LearnResourceCourseModule {}
