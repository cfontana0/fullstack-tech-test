import type { FooAPI } from '../datasources/FooAPI';
import { Api, Bar } from '../datasources/BarAPI';

export interface DrinkType {
  name: string;
  price: number;
}

export interface DrinkDataSourceType {
  getDrinks: () => Promise<{ [key: string]: DrinkType }>;
  getDiscounts: () => Promise<{ [key: string]: number }>;
}

export interface DataSourceContext {
  authorization?: string;
  dataSources: {
    FooAPI: FooAPI;
    BarAPI: Api<Bar>;
    DrinkDataSource: DrinkDataSourceType;
  };
}
