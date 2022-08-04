import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  links = ["https://en.wikipedia.org/wiki/Cat", "https://www.youtube.com/watch?v=hY7m5jjJ9mM"]
  constructor() { }

  ngOnInit() {
  }

}
