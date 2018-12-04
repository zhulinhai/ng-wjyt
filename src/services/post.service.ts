import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { PostRespModel } from '../model/postResp.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = '';

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = environment.baseUrl;
  }

  getAllPosts(tag: string, pageIndex: number): Observable<any> {
    // const uri = `${this.baseUrl}/api/core/get_category_posts/?slug=${tag}&page=${pageIndex}`;
    const uri = './assets/mock/posts.json';
    return this.httpClient.get<PostRespModel>(uri).pipe(
      map(item => {
        console.log(item.posts.filter(post => {
          return post.categories.map(category => category.slug).indexOf(tag) >= 0;
        }), tag);
        return item.posts.filter(post => {
          return post.categories.map(category => category.slug).indexOf(tag) >= 0;
        });
      }),
    );
  }
}
