export class DrinkDataSource {
    drinks: Record<string, { name: string; price: number; img: string; }>;
    discounts: Record<number, number>;
  
    constructor() {
      this.drinks = {
        '1': { name: 'Coca Cola', price: 1, img: '/static/coca-cola.png' },
        '2': { name: 'Fanta', price: 1, img: '/static/fanta.png' },
        '3': { name: 'Sprite', price: 1, img: '/static/sprite.png' },
        '4': { name: 'Dr Pepper', price: 1, img: '/static/dr-pepper.png' },
        '5': { name: 'Iron Bru', price: 1, img: '/static/iron-bru.png' },
      };
  
      this.discounts = {
        2: 0.05,
        3: 0.1,
        4: 0.2,
        5: 0.25,
      };
    }
  
    getDrinks() {
      return this.drinks;
    }
  
    getDiscounts() {
      return this.discounts;
    }
  }
  