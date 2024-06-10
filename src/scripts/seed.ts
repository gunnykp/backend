import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { PostsService } from '../posts/posts.service';
import * as fs from 'fs';
import { Post } from '../posts/post.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const postsService = app.get(PostsService);

  console.log('Reading posts.json file...');
  const data = JSON.parse(fs.readFileSync('src/scripts/posts.json', 'utf8'));
  console.log('Seeding data...');

  for (const postData of data) {
    const post = new Post();
    post.title = postData.title;
    post.content = postData.content;
    post.postedAt = new Date(postData.postedAt);
    post.postedBy = postData.postedBy;
    post.tags = postData.tags;
    await postsService.create(post);
    console.log(`Seeded post: ${post.title}`);
  }

  await app.close();
  console.log('Seeding completed.');
}
bootstrap();
