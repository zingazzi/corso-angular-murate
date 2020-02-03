import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../interface/post.interface";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  private url = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + "posts");
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.url + "posts/" + id);
  }
}
