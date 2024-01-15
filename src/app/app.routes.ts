import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent,
    },
    {
        path: 'post/:id',
        title: 'Post',
        component: PostComponent,
    }
];