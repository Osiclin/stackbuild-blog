import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-add-posts',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './add-posts.component.html',
  styleUrl: './add-posts.component.css'
})
export class AddPostsComponent {
  title: string = '';
  body: string = '';
  createPost: boolean = false;
  isCreatingPost: boolean = false

  constructor(private postService: PostService) { }

  toggleCreatePost() {
    this.createPost = !this.createPost
  }

  onSubmit() {
    if (!this.title || !this.body) return
    const newPost = {
      title: this.title,
      body: this.body,
      userId: 1
    }
    this.isCreatingPost = true
    this.postService
      .addPost(newPost)
      .subscribe(
        null,
        (error) => console.error(error),
        () => {
          this.createPost = false
          this.isCreatingPost = false
        }
      )
  }
}
