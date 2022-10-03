import React, { useContext } from 'react';

import { Context } from '../../store/Provider';
import Item from '../item/Item';
import { IItem } from '../../interfaces';
import './styles.scss';

const Items: React.FC = () => {
  const [state] = useContext(Context);
  const { items } = state;

  const sortedItems = items.sort((a: IItem, b: IItem) => a.name.localeCompare(b.name));

  return (
    <div className="Items">
      <div className="Items__header">
        <h2 className="Items__header-title">Player Items</h2>
      </div>
      <div className="Items__content">
        <div className="Items__legend">
          <span>Item</span>
          <span>Quantity</span>
          <span>Score</span>
        </div>
        <div className="Items__list">
          {sortedItems?.length > 0 &&
            sortedItems.map((item: IItem) => {
              return <Item key={item.name} item={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Items;
