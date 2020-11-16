import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import config, { GraphQLConfigOptions, TypeOrmConfigOptions } from '@src/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    GraphQLModule.forRootAsync({ useClass: GraphQLConfigOptions }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigOptions })
  ]
})
export class AppModule {}
