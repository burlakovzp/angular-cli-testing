import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryPostsService } from './shared/posts.service';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './header/header.component';
import { ApiService } from './api.service';
import { PostComponent } from './post/post.component';

const appRoutes: Routes =[
  { path: '', component: PostsComponent },
  { path: 'post/:name', component: PostComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryPostsService)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
