import React, { useContext } from 'react';
import { Context } from '../../store/Provider';
import { types } from '../../store/Reducer';
import Button from '../UI/button/Button';
import './styles.scss';

const Totals: React.FC = () => {
  const [store] = useContext(Context);
  const [, dispatch] = useContext(Context);
  const { bonuses, total } = store;

  return (
    <div className="Totals">
      <div className="Totals__bonuses">
        Bonuses: <span data-testid="bonuses">{bonuses}</span>
      </div>
      <div className="Totals__results">
        <div className="Totals__results-info">
          Total: <span data-testid="total">{total}</span>
        </div>
        <Button name="New Game" onClick={() => dispatch({ type: types.resetGame })} />
      </div>
    </div>
  );
};

export default Totals;
