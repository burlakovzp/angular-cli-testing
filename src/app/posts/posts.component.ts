import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
  public data: any = []
  public tags: any = []
  public posts: any = [];

  constructor(private apiService: ApiService) {  }

  ngOnInit() {
    this.apiService.getPosts().subscribe((data) => {
      this.data = data;
      this.posts = data;

      // Вывод всех тегов ( сделано вместо отдельного файла json с тегами)
      var results = [];
      for (let i = 0; i < this.data.length; i++) {
        results.push(this.data[i].tag.one);
        results.push(this.data[i].tag.two);
        results.push(this.data[i].tag.three);
      }
      results.sort();

      for (var i = 0; i < results.length - 1; i++) {
        if (results[i + 1] != results[i]) {
          this.tags.push(results[i]);
        }
      }
    });
  }

  // При выборе тега в селекторе
  public onTagSelect($event) {
    if (!$event.target.value) {
      this.posts = this.data;
      return;
    }
    this.posts = this.data.filter(x => x.tag.one == $event.target.value || x.tag.two == $event.target.value || x.tag.three == $event.target.value)
  }
}
