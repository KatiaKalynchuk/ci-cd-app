import { DataSource } from 'typeorm';
import { Post } from '../posts/entities/post.entity';
import config from '../config/configuration';
const dbConfig = config().database;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: dbConfig.host,
  port: Number(dbConfig.port),
  username: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.name,
  entities: [Post],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
  logging: true,
});
