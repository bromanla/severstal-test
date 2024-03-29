import { ApiProperty } from '@nestjs/swagger';
import { Note } from '../entity/note.entity';
import { BaseNoteDTO } from './note.base.dto';
import { OptionDTO, type ConstructorOptionDTO } from 'src/common/dto';
import type { IFindAllNoteDTO } from '@severstal-test/common';

export class FindAllNoteDTO implements IFindAllNoteDTO {
  @ApiProperty({ type: BaseNoteDTO, isArray: true })
  public data: BaseNoteDTO[];

  @ApiProperty()
  public option: OptionDTO;

  constructor(notes: Note[], option: ConstructorOptionDTO) {
    this.data = notes.map((note) => new BaseNoteDTO(note));
    this.option = new OptionDTO(option);
  }
}
