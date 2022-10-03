export interface IPoint {
  name: string | null;
  points: number;
  bonus?: number;
  bonusRatio?: number;
}

export interface IItem {
  name: string;
  points: number;
  quantity: number;
}
export interface IAction {
  type: string;
  value: any;
}
export interface IBonus {
  name: string;
  quantity: number;
  points: number;
}

export interface IValue {
  name: string;
  bonusRatio?: number;
  bonus?: number;
}

export interface IMatch {
  bonusRatio: number;
  bonus: number;
}

export interface IState {
  points: IPoint[];
  items: IItem[];
  bonuses: number;
  total: number;
}
