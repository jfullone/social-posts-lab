import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() singlePost: Post = {title: "", thought: ""}
  @Output() deleted = new EventEmitter()

  constructor() { }

  deletePost(): void {
    this.deleted.emit();
  }

  ngOnInit(): void {
  }

}
