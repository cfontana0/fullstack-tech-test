import { Resolvers } from '../__generated__/resolvers-types';
import { DrinkType, DataSourceContext } from '../types/DataSourceContext';
import { calculateBundlePrice } from '../utils/drinks';

export const resolvers: Resolvers = {
  Query: {
    async drinks(_parent, _args, { dataSources }) {
      try {
        const drinks = dataSources.DrinkDataSource.getDrinks();
        return Object.values(drinks);
      } catch (err: unknown) {
        return [];
      }
    },
    calculatePrice: async (
      _parent: unknown,
      { drinks }: { drinks: string[] },
      { dataSources }: DataSourceContext,
    ) => {
      // Fetch drink data and discounts in parallel
      const [drinkData, discounts] = await Promise.all([
        dataSources.DrinkDataSource.getDrinks(),
        dataSources.DrinkDataSource.getDiscounts(),
      ]);

      // Initialize a counter for each unique drink
      const drinkCount: { [key: string]: number } = {};

      // Transform drinkData to a map for efficient lookup
      const drinkMap = Object.values(drinkData).reduce((acc, curr) => {
        acc[curr.name] = curr;
        return acc;
      }, {} as { [key: string]: { name: string; price: number } });

      // Populate drinkCount based on the provided drink list
      drinks.forEach((drinkName) => {
        const drink = drinkMap[drinkName];
        if (drink) {
          drinkCount[drink.name] = (drinkCount[drink.name] || 0) + 1;
        }
      });

      let total = 0;
      const details: { price: number; bundle: string[] }[] = [];

      // Loop until there are no more drinks left
      while (drinks.length > 0) {
        // Determine the size of the largest possible bundle
        const bundleSize = Object.values(drinkCount).filter(
          (count) => count > 0,
        ).length;
        // If we can't make a bundle, break the loop
        if (bundleSize === 0) {
          break;
        }

        // Calculate the price of the bundle and apply the discount
        const bundlePrice = calculateBundlePrice(bundleSize, discounts);
        total += bundlePrice;

        // Initialize the current bundle
        const currentBundle: string[] = [];

        // Decrement the count for each drink in the bundle
        Object.keys(drinkCount).forEach((drinkName) => {
          if (drinkCount[drinkName] > 0) {
            currentBundle.push(drinkName);
            drinkCount[drinkName]--;
          }
        });

        // Store bundle details
        details.push({ price: bundlePrice, bundle: currentBundle });
      }

      return { total, details };
    },
  },
  Drink: {
    appendedName(parent: DrinkType) {
      return `${parent.name} - appended`;
    },
  },
};
