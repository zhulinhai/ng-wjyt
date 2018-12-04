import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../../services/';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() tag = 'case';
  pageIndex = 0;

  $postObserver: Observable<any>;
  msnry: any;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.$postObserver = this.postService.getAllPosts(this.tag, this.pageIndex);
  }

}
