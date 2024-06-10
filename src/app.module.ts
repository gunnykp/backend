import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'db',
      port: +process.env.DATABASE_PORT || 5432,
      username: process.env.DATABASE_USER || 'user',
      password: process.env.DATABASE_PASSWORD || 'password',
      database: process.env.DATABASE_DB || 'posts_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Post]),
    PostsModule,
  ],
})
export class AppModule {}
