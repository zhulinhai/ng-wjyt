import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../../../services/';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent implements OnInit {

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
