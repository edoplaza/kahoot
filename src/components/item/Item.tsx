import React from 'react';

import { IItem } from '../../interfaces';
import './styles.scss';
interface IProps {
  item: IItem;
}

const Item: React.FC<IProps> = ({ item }) => {
  const { name, points, quantity } = item;
  return (
    <div className="Item">
      <div className="Item__name">{name}</div>
      <div className="Item__quantity">{quantity}</div>
      <div className="Item__score">{points}</div>
    </div>
  );
};

export default React.memo(Item);
