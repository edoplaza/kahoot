import React from 'react';

import './styles.scss';

interface IButton {
  name: string;
  onClick: () => React.MouseEvent<HTMLButtonElement>;
}

const Button: React.FC<IButton> = ({ name, onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
