export interface Beverage {
  id: number;
  name: string;
  caffeine: number;
  description: string;
  servings: number;
}

export const beverages = [
  {
    id: 1,
    name: 'Monster Ultra Sunrise',
    caffeine: 75,
    description: 'A refreshing orange beverage that has 75mg of caffeine per service. Every can has two servings.',
    servings: 0,
  },
  {
    id: 2,
    name: 'Black Coffee',
    caffeine: 95,
    description: 'The classic, the average 8oz. serving of blck coffee has 95mg of caffeine.',
    servings: 0,
  },
  {
    id: 3,
    name: 'Americano',
    caffeine: 77,
    description: 'Sometime you need to water it down a bit... and in comes the americano with an average of 77mg. of caffeine per serving.',
    servings: 0,
  },
  {
    id: 4, 
    name: 'Sugar free NOS',
    caffeine: 130, 
    description: 'Another orange delight without the sugar. It has 130 mg. per serving and each can has two servings.',
    servings: 0,
  },
  {
    id: 5,
    name: '5 Hour Energy',
    caffeine: 200,
    description: 'An amazing shot of get up and go! Each 2 fl. oz. container has 200mg of caffeine to get you going.',
    servings: 0,
  },
];