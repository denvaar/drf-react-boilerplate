import React from 'react';
import { Component } from 'react';

import ReactImg from '../../reactjs.png';
import ReduxImg from '../../redux.png';
import WebpackImg from '../../webpack.png';
import DRFImg from '../../drf.png';
import DockerImg from '../../docker.png';

export default class App extends Component {
  render() {
    return (
      <div className="init">
        <img height="70px" src={ReactImg}></img>
        <br/>
        <img height="60px" src={ReduxImg}></img>
        <br/>
        <img height="135px" src={WebpackImg}></img>
        <br/>
        <img height="130px" src={DRFImg}></img>
        <br/>
        <img height="90px" src={DockerImg}></img>
      </div>
    );
  }
}
