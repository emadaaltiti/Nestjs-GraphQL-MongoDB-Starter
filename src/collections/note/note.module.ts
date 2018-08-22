import { Module } from '@nestjs/common';

import { NoteResolver } from './note.resolver';
import { NoteService } from './note.service';
import { noteProvider } from './note.provider';
import { DatabaseModule } from '../../databases/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [NoteService, NoteResolver, ...noteProvider],
})

export class NoteModule { }
