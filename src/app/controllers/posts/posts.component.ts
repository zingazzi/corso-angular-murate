import { Component, OnInit } from "@angular/core";
import { PostsService } from "../../services/posts.service";
import { Post } from "../../interface/post.interface";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostsService) {}

  posts: Post[] = [];

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(response => {
      console.log(response);
      this.posts = response;
    });
  }
}
