import React, { Component } from 'react';

import Menu from '../components/Menu';
import CountdownTimer from '../components/CountdownTimer';
import PausePlay from '../components/PausePlay';

export default class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Menu />
        </div>
        <div className="row justify-content-center">
          <CountdownTimer />
        </div>
        <div className="row justify-content-center">
          <PausePlay />
        </div>
      </div>
    );
  }
}
