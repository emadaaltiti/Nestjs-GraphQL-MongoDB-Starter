import {
  Query,
  Mutation,
  Resolver,
} from '@nestjs/graphql';

import { NoteService } from './note.service';
import { Note } from './interfaces/note.interface';
 
@Resolver('notes')
export class NoteResolver {
  constructor(
    private readonly notesService: NoteService,
  ) { }

  @Query()
  async getNotes(_, {}) {

    return await this.notesService.findAll();
  }

  @Mutation('findNotesById')
  async findById(_, params: any): Promise<Note> {

    return await this.notesService.findById(params);
  }

  @Mutation('createNotes')
  async create(_, params: any): Promise<Note> {

    return await this.notesService.create(params.note);
  }

  @Mutation('updateNotes')
  async update(_, params: any): Promise<Note> {
      params.note._id = params._id;
      const updateNotes = await this.notesService.update(params.note);
      if (updateNotes.ok === 1) {
        return await this.notesService.findById(params._id);
      
    }
  }

  @Mutation('deleteNotes')
  async delete(_, params: any): Promise<Note> {
    return await this.notesService.delete(params);
  }
}
