import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'mongodbProviders',
    useFactory: async (): Promise<typeof mongoose> => {
      const dbConnect = await mongoose.connect('mongodb://localhost:27017/demodb',{ useNewUrlParser: true });
      dbConnect.set('debug',true);
      return dbConnect;
    },
  },
];
