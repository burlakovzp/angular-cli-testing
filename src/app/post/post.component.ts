import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public id: string;
  public data: Array<Object> = [];
  public clicked: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {
    this.id = activatedRoute.snapshot.url[1].path;
   }

  ngOnInit() {
    this.apiService.getPosts().subscribe((data) => {
      this.data = data;
    });
  }

  display() {
    this.clicked = true;
  }

  hide() {
    this.clicked = false;
  }
}
