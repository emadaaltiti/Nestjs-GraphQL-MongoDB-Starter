import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';

import { NoteModule } from './collections/note/note.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { SubscriptionsService } from './subscriptions/subscriptions.service';

@Module({
  imports: [
    SubscriptionsModule.forRoot(),
    GraphQLModule,
    NoteModule,
    ],
})

export class ApplicationModule implements NestModule {
  constructor(
    private readonly subscriptionsService: SubscriptionsService,
    private readonly graphQLFactory: GraphQLFactory,
  ) {}

  configure(consumer: MiddlewareConsumer) {
    const schema = this.createSchema();
    this.subscriptionsService.createSubscriptionServer(schema);

    consumer
      .apply(
        graphiqlExpress({
          endpointURL: '/graphql',
          subscriptionsEndpoint: `ws://localhost:3001/subscriptions`,
        }),
    )
      .forRoutes('/graphiql')
      .apply(graphqlExpress(req => ({ schema, rootValue: req })))
      .forRoutes('/graphql');
  }

  createSchema() {
    const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
    return this.graphQLFactory.createSchema({ typeDefs,
      resolverValidationOptions: {
        requireResolversForResolveType: false
      } });
  }
}