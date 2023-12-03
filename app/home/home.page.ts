import { Component } from '@angular/core';

interface Card {
  expanded: boolean;
  title: string;
  link: string;
  linkText: string;
  imageSrc: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cards: Card[] = [
    { expanded: false, title: 'Scrap metal recycling facility', link: 'https://istockphoto.com', linkText: 'istockphoto.com', imageSrc: 'assets/icon/metal.JPG' },
    { expanded: false, title: 'Scrap Metals', link: 'https://junkyardsnearme.net', linkText: 'junkyardsnearme.net', imageSrc: 'assets/icon/scrap.webp' },
    { expanded: false, title: 'Pile of Metal Junk for Recycling Ceramic Ornament', link: 'https://zazzle.com', linkText: 'zazzle.com', imageSrc: 'assets/icon/e1.JPG' },
    { expanded: false, title: 'Scrap Metal Yard Near Me', link: 'https://junkyardsnearme.net', linkText: 'junkyardsnearme.net', imageSrc: 'assets/icon/yard.webp' },
    // Add more cards as needed
  ];

  constructor() {}

  toggleCard(card: Card) {
    card.expanded = !card.expanded;
  }
}
