import { ApiProperty } from '@nestjs/swagger';
import { Language } from '@queroser/learn/domain-content';
import { EnvSide } from '@queroser/shared/util-data';

export class LanguageDto implements Language {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty({
    type: `'client' | 'server' | 'both'`
  })
  side: EnvSide;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

}
