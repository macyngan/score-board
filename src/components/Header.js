import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = props => {
  return (
    <div className="header">
      <Stats className="statsComps" players={props.players} />
      <h1 className="title">Scoreboard</h1>
      <Stopwatch className="stopwatchComps" />
    </div>
  );
}

Header.propTypes = {
  players: PropTypes.array.isRequired,
};

export default Header;
