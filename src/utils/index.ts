import { IBonus, IPoint, IValue, IMatch, IItem } from '../interfaces/index';

export function calculateBonuses(
  beforeBonuses: IBonus[],
  value: IValue,
  totalBonuses: number,
  match: IMatch
) {
  let bonuses = totalBonuses;
  let result: any = {};

  const items = beforeBonuses.map((item: IItem) => {
    if (item.name === value.name && !!match?.bonus) {
      const bonus = item.quantity % match.bonusRatio === 0 ? match.bonus : 0;
      if (bonus !== 0) bonuses += bonus;
      return { ...item, points: item.points + bonus };
    } else {
      return item;
    }
  });

  result.items = items;
  result.bonuses = bonuses;

  return result;
}

export function getResults(state: any, value: any) {
  const result: any = {};
  let beforeBonuses: IBonus[] = [];
  let totalBonuses = state.bonuses;

  const basePoints = state.points.find((p: IPoint) => p.name === value.name);

  if (state.items.find((i: IItem) => i.name === value.name)) {
    beforeBonuses = state.items.map((item: IItem) => {
      if (item.name === value.name) {
        return {
          name: item.name,
          quantity: item.quantity + 1,
          points: item.points + basePoints.points,
        };
      } else {
        return item;
      }
    });
  } else {
    beforeBonuses = [...state.items, { name: value.name, quantity: 1, points: value.points }];
  }

  const match: IMatch = state.points.find((i: IPoint) => i.name === value.name);
  result.items = calculateBonuses(beforeBonuses, value, totalBonuses, match).items;
  result.bonuses = calculateBonuses(beforeBonuses, value, totalBonuses, match).bonuses;

  result.total = result.items.reduce((accumulator: number, object: IItem) => {
    return accumulator + object.points;
  }, 0);

  return result;
}
