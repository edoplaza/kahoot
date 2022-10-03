import { IState, IAction } from '../interfaces';
import { getResults } from '../utils';

const types = {
  setPoints: 'set points',
  addPoints: 'add points',
  resetGame: 'reset game',
};

const initialState: IState = {
  points: [],
  items: [],
  bonuses: 0,
  total: 0,
};

const Reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case types.setPoints:
      return {
        ...state,
        points: action.value,
      };
    case types.addPoints:
      return {
        ...state,
        items: getResults(state, action.value).items,
        total: getResults(state, action.value).total,
        bonuses: getResults(state, action.value).bonuses,
      };
    case types.resetGame:
      return {
        ...state,
        items: [],
        bonuses: 0,
        total: 0,
      };
    default:
      return state;
  }
};

export { initialState, types };

export default Reducer;
