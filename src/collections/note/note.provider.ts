import { Connection } from 'mongoose';

import { noteSchema } from './schemas/note.schema';

export const noteProvider = [
  {
    provide: 'noteProvider',
    useFactory: (connection: Connection) => connection.model('note', noteSchema),
    inject: ['mongodbProviders'],
  },
];
