import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Fwuffy Widdle Kittie Photos';
  image1 = 'https://images2.alphacoders.com/100/1000999.jpg';
  image2 = 'https://i.pinimg.com/736x/01/6f/72/016f722ab179a9441086e259856049b0--wizards-fluffy-cat.jpg';
  image3 = 'https://www.ukpets.com/oc-content/uploads/841/396765_original.jpg';

  constructor() { }

  ngOnInit() {
  }

}