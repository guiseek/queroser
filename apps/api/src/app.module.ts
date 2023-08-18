import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'

import {dataSourceUser} from '@queroser/account/api-user'
import {dataSourceCourse} from '@queroser/learn/api-course'
import {dataSourceContent} from '@queroser/learn/api-content'
import {AccountResourceUserModule} from '@queroser/account/resource-user'
import {LearnResourceCourseModule} from '@queroser/learn/resource-course'
import {LearnResourceContentModule} from '@queroser/learn/resource-content'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'pguser',
      password: 'pgpass',
      database: 'pgdata',
      synchronize: true,
      entities: [
        ...dataSourceUser.entities(),
        ...dataSourceCourse.entities(),
        ...dataSourceContent.entities(),
      ],
      port: 5432,
    }),
    AccountResourceUserModule,
    LearnResourceCourseModule,
    LearnResourceContentModule,
  ]
})
export class AppModule {}
