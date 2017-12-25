import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import Stopwatch from '../components/Stopwatch';
import Counter from '../components/Counter';
import Stats from '../components/Stats';
import AddPlayerForm from '../components/AddPlayerForm';
import Player from '../components/Players';
import Header from '../components/Header';

class Scoreboard extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired
  };

  render() {
    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => (
        <Player
          index = { index }
          name = { player.name }
          score = { player.score }
          key = { player.name }
          updatePlayerScore = { updatePlayerScore }
          removePlayer = { removePlayer }
        />
    ));

    return (
      <div className="app scoreboard">
        <Header players={players} />
        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
};

const mapStateToProps = state => (
  {
    players: state
  }
);

export default connect(mapStateToProps)(Scoreboard);
