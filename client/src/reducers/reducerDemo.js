import { DEMO } from '../actions/actions.js';

const demoReducer = (state = [], action) => {
  switch (action.type) {
    case DEMO:
      return {
        id: action.id,
        text: action.text
      }; 
    default:
      return state;
  }
}

