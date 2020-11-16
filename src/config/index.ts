import { GqlModuleOptions } from '@nestjs/graphql';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const serverConfig = {
  port: Number(process.env.PORT) ?? 3030
};

const graphqlConfig: GqlModuleOptions = {
  autoSchemaFile: true
};

const databaseConfig: TypeOrmModuleOptions = {
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.MONGO_PORT) ?? 27017,
  username: process.env.DB_USERNAME ?? 'dbuser01',
  password: process.env.DB_PASSWORD ?? 'dbpass01',
  database: process.env.DB_DATABASE ?? 'dbe2e'
};

export default () => ({ serverConfig, graphqlConfig, databaseConfig });

export * from '@src/config/graphql.config';
export * from '@src/config/typeorm.config';
