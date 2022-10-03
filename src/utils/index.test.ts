import { calculateBonuses } from './index';

const testData = {
  beforeBonuses: [
    {
      name: 'A',
      quantity: 3,
      points: 150,
    },
  ],
  value: {
    name: 'A',
    points: 50,
  },
  totalBonuses: 0,
  match: {
    name: 'A',
    points: 50,
    bonus: 50,
    bonusRatio: 3,
  },
};

const testResult = { bonuses: 50, items: [{ name: 'A', points: 200, quantity: 3 }] };

const { beforeBonuses, value, totalBonuses, match } = testData;

describe('Test Calculate Bonuses', () => {
  it('should calculate correct bonus when A is clicked three times', () => {
    expect(calculateBonuses(beforeBonuses, value, totalBonuses, match)).toStrictEqual(testResult);
  });
});
