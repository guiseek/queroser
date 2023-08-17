import {Injectable} from '@nestjs/common'
import {CreateForumResourceFaqDto} from './dto/create-forum-resource-faq.dto'
import {UpdateForumResourceFaqDto} from './dto/update-forum-resource-faq.dto'

@Injectable()
export class ForumResourceFaqService {
  create(createForumResourceFaqDto: CreateForumResourceFaqDto) {
    return 'This action adds a new forumResourceFaq'
  }

  findAll() {
    return `This action returns all forumResourceFaq`
  }

  findOne(id: number) {
    return `This action returns a #${id} forumResourceFaq`
  }

  update(id: number, updateForumResourceFaqDto: UpdateForumResourceFaqDto) {
    return `This action updates a #${id} forumResourceFaq`
  }

  remove(id: number) {
    return `This action removes a #${id} forumResourceFaq`
  }
}
