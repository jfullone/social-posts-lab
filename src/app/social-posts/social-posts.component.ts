import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  showForm: boolean = false;

  postList: Post[] = [
    {title: "Learn to Code", thought: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque posuere mi. Morbi ut ante quis lorem auctor vestibulum a ultrices ipsum. Duis at faucibus massa. Nulla scelerisque odio ut aliquet tristique. Morbi efficitur lobortis consectetur. Morbi lacus neque, efficitur in turpis eu, tincidunt varius quam. Vestibulum id porta justo. Donec ac egestas orci. Etiam ac arcu vel urna tempus cursus ut ut est."},
    {title: "Grand Circus Bootcamps", thought: "Donec sit amet aliquam leo. Nulla nec ante ultrices mauris suscipit convallis. Nullam vulputate at augue quis dictum. Morbi eu scelerisque ex, ac fermentum metus. Etiam lobortis diam a velit laoreet, vitae congue nisl egestas. Pellentesque in dui faucibus magna tempus interdum. Donec nibh libero, viverra sed felis ac, accumsan condimentum elit. Vestibulum maximus a arcu non hendrerit. Aliquam sapien lorem, posuere sed nisi vel, rhoncus sagittis tortor. Proin elementum finibus elit, in sagittis nulla tempor eget."},
    {title: "Land a Junior Developer Job", thought: "Praesent sit amet finibus sapien, in hendrerit nisi. Donec nisi eros, aliquet id tempor at, porta id dolor. Mauris a libero feugiat, iaculis leo ullamcorper, placerat erat. Pellentesque congue leo libero, quis malesuada risus condimentum vitae. Aliquam sit amet nisl mi. Praesent faucibus dapibus ligula eu fermentum. Quisque aliquam placerat tincidunt."}
  ]

  onDelete(i: number) {
    this.postList.splice(i, 1);
  }
  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSubmit(post: Post){
    this.postList.unshift(post);
    this.showForm = !this.showForm;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
