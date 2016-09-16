import React from 'react';
import { Component } from 'react';

import ReactImg from '../../reactjs.png';
import ReduxImg from '../../redux.png';
import WebpackImg from '../../webpack.png';
import DRFImg from '../../drf.png';
import DockerImg from '../../docker.png';

let nextId = 0;
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="init">
        <input />
        <button onClick={ () => {
          store.dispatch({
            type: 'DEMO',
            id: nextId++,
            text: input.value
          });
          input.value = '';
        } }>Add</button>
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
