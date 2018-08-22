import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { Note } from './interfaces/note.interface';
import { CreateNotesDto } from './dto/note.dto';

@Injectable()
export class NoteService {
  constructor(
    @Inject('noteProvider')
    private readonly noteModel: Model<Note>,
  ) { }

  async create(createNoteDto: CreateNotesDto): Promise<Note> {
    const createdNote = new this.noteModel(createNoteDto);
    return await createdNote.save();
  }

  async findAll(): Promise<Note[]> {
    const notes = await this.noteModel.find({ deleted_at: null });

    return notes;
  }

  async findById(id): Promise<Note> {
    const note = await this.noteModel.findById(id);

    return note;
  }

  async delete(id): Promise<any> {
    const deleteNote = await this.noteModel.updateOne({ _id: id }, {
      $set: {
        deleted_at: new Date(),
      },
    });
    return deleteNote;
  }

  async update(updateNoteDto: CreateNotesDto): Promise<any> {
    const updateNote = new this.noteModel(updateNoteDto);
    return await updateNote.update(updateNote);
  }
}
