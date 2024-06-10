import { Controller, Get, Post as HttpPost, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): Promise<Post[]> {
    return this.postsService.findAll();
  }

  @HttpPost()
  create(@Body() post: Post): Promise<Post> {
    return this.postsService.create(post);
  }
}
