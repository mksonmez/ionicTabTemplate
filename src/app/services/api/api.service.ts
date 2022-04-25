import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  popularItems: any[] = [
    { id: 1, name: 'Crab', price: 14.99, category: 'Sea Food', img: 'assets/imgs/crab.png' },
    { id: 2, name: 'Fish', price: 7.99, category: 'Sea Food', img: 'assets/imgs/fish.png' },
    { id: 3, name: 'Octopus', price: 23.99, category: 'Sea Food', img: 'assets/imgs/octopus.png' }
  ]
  
  featuredItems: any[] = [
    { id: 4, name: 'Croissant', price: 2.75, category: 'Pastry', img: 'assets/imgs/croissant.png' },
    { id: 5, name: 'Donut', price: 1.95, category: 'Pastry', img: 'assets/imgs/donut.png' },
    { id: 6, name: 'Tea', price: 3.50, category: 'Hot Drink', img: 'assets/imgs/hot-tea.png' },
    { id: 7, name: 'Coffe', price: 3.35, category: 'Hot Drink', img: 'assets/imgs/espresso.png' }
  ]

  categories: any[] = [
    { id: 20, name: 'Sea Food', price: '$9 - $32', category: 'Turkey' , img: 'assets/imgs/sea-food.png' },
    { id: 21, name: 'Pastry', price: '$2 - $12' , category: 'Turkey', img: 'assets/imgs/bakery.png' },
    { id: 22, name: 'Hot Drink', price: '$1 - $4', category: 'USA', img: 'assets/imgs/hot-coffee.png' }
  ]

  constructor() { }

  getItem(id) {
    const item = this.popularItems.find(x => x.id == id);
    return item;
  }
}
