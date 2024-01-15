import { Injectable } from '@angular/core';
import { Post } from '../interfaces/Post';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../interfaces/Comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postUrl = 'https://jsonplaceholder.typicode.com/posts'
  private commentUrl = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl)
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.postUrl}/${id}`)
  }

  getPostComments(id: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.commentUrl}?postId=${id}`)
  }

  addPost(data: Post): Observable<Post> {
    // Set headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add other headers as needed
    });
    return this.http.post<Post>(`${this.postUrl}`, data, { headers })
  }

}
