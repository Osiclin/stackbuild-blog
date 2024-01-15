import { Component } from '@angular/core';
import { ArticleComponent } from '../../components/article/article.component';
import { ButtonComponent } from '../../components/button/button.component';
import { AddPostsComponent } from '../../components/add-posts/add-posts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArticleComponent,
    ButtonComponent,
    AddPostsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
