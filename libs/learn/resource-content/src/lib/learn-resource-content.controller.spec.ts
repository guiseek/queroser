import {LearnResourceContentController} from './learn-resource-content.controller'
import {ContentRepository} from '@queroser/learn/data-source-content'
import {MockRepository} from '@queroser/shared/data-source'
import {Test, TestingModule} from '@nestjs/testing'

const CONTENT_COLLECTION_MOCK = [
  {
    id: '1d4eb101-93d7-47bb-ba11-11b22d11eb9f',
    contentType: 'text',
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '797ec437-b541-4262-89d1-ee1b29f01985',
    contentType: 'text',
    status: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

const pageOptions = {skip: 1, take: 1, page: 1}

describe('LearnResourceContentController', () => {
  let controller: LearnResourceContentController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearnResourceContentController],
      providers: [
        {
          provide: ContentRepository,
          useFactory() {
            return new MockRepository(CONTENT_COLLECTION_MOCK)
          },
        },
      ],
    }).compile()

    controller = module.get<LearnResourceContentController>(
      LearnResourceContentController
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('data must have 1 item', async () => {
    jest.spyOn(controller['contentRepository'], 'find')

    const {data} = await controller.find(pageOptions)

    expect(data.length).toBe(1)
  })

  it('page meta response', async () => {
    jest.spyOn(controller['contentRepository'], 'find')

    const {meta} = await controller.find(pageOptions)

    expect(JSON.stringify(meta)).toStrictEqual(
      JSON.stringify({
        page: 1,
        take: 1,
        itemCount: 1,
        pageCount: 1,
        hasPreviousPage: false,
        hasNextPage: false,
      })
    )
  })
})
