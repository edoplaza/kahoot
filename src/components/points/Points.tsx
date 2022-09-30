import React from 'react';

import Logo from '../../assets/images/logo.png';

import './styles.scss';

const Points = () => {
  return (
    <div className="Points">
      <div className="Points__header">
        <img className="Points__header-logo" src={Logo} alt="Kahoot logo" />
        <h2 className="Points__header-title">Points</h2>
      </div>
    </div>
  );
};

export default Points;
