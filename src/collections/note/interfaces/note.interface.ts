import { Document } from 'mongoose';

export interface Note extends Document {
  readonly name: string;
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly deleted_at: Date;
}
