import { DEMO } from '../actions/actions.js';

const demoReducer = (state = [], action) => {
  switch (action.type) {
    case DEMO:
      return state; 
    default:
      return state;
  }
}

