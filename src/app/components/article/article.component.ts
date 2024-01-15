import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/Post';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  posts: Post[] = []
  isLoading: boolean = true

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService
      .getPosts()
      .subscribe(
        (posts) => this.posts = posts,
        (error) => console.error(error),
        () => this.isLoading = false
      )
  }
}
