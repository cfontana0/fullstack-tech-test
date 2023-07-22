import { DrinkName } from "../types";

export const getImageFromName = (name: DrinkName): string => {
  const images: Record<DrinkName, string> = {
    "Coca Cola": "/static/coca-cola.png",
    "Fanta": "/static/fanta.png",
    "Sprite": "/static/sprite.png",
    "Dr Pepper": "/static/dr-pepper.png",
    "Iron Bru": "/static/iron-bru.png",
  };
  return images[name];
};
