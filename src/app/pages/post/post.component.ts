import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/Post';
import { Router } from '@angular/router';
import { ArticleComponent } from '../../components/article/article.component';
import { CommonModule } from '@angular/common';
import { Comment } from '../../interfaces/Comment';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [ArticleComponent, CommonModule, ButtonComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  post: Post = {}
  comments: Comment[] = []
  isLoading: boolean = true
  isLoadingComments: boolean = true
  showComments: boolean = false

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  toggleShowComments(status: boolean): void {
    this.showComments = status
  }

  ngOnInit(): void {
    const postId = this.router.url.split("/")[2]
    this.postService
      .getPost(postId)
      .subscribe(
        (post) => this.post = post,
        (error) => console.error(error),
        () => this.isLoading = false
      )

    this.postService
      .getPostComments(postId)
      .subscribe(
        (comments) => this.comments = comments,
        (error) => console.error(error),
        () => this.isLoadingComments = false
      )
  }
}
