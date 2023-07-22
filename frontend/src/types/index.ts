export type DrinkName =
  | "Coca Cola"
  | "Fanta"
  | "Sprite"
  | "Dr Pepper"
  | "Iron Bru";

export interface Drink {
  name: DrinkName;
  img: string;
  price: number;
}

export interface CalculatePriceDetail {
  bundle: DrinkName[];
  price: number;
}

export interface CalculatePrice {
  details: CalculatePriceDetail[];
  total: number;
}
