import React, { useContext } from 'react';

import { Context } from '../../store/Provider';
import { types } from '../../store/Reducer';
import { IPoint } from '../../interfaces';
import './styles.scss';
interface IProps {
  point: IPoint;
}

const Point: React.FC<IProps> = ({ point }) => {
  const { name, points } = point;

  const [, dispatch] = useContext(Context);

  return (
    <div
      className="Point"
      data-testid="point"
      onClick={() => dispatch({ type: types.addPoints, value: { name: name, points: points } })}
    >
      {name}
    </div>
  );
};

export default Point;
