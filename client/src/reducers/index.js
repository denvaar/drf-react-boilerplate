import { combineReducers } from 'redux';

import DemoReducer from './reducerDemo';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  demo: DemoReducer
});

export default rootReducer;
