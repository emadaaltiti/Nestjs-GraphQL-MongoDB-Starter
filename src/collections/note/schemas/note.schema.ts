import * as mongoose from 'mongoose';

export const noteSchema = new mongoose.Schema({
  name: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
  deleted_at: { type: Date },
});
