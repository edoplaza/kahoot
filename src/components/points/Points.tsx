import React, { useContext } from 'react';

import { Context } from '../../store/Provider';
import Point from '../point/Point';
import Logo from '../../assets/images/logo.png';
import { IPoint } from '../../interfaces';
import './styles.scss';

const Points: React.FC = () => {
  const [state] = useContext(Context);
  const { points } = state;

  return (
    <div className="Points">
      <div className="Points__header">
        <img className="Points__header-logo" src={Logo} alt="Kahoot" />
        <h2 className="Points__header-title">Points</h2>
      </div>
      <div className="Points__content">
        {points?.length > 0 &&
          points.map((point: IPoint) => <Point key={point.name} point={point} />)}
      </div>
    </div>
  );
};

export default Points;
