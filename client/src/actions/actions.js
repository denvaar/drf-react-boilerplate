import axios from 'axios';

export const DEMO = 'DEMO';

const demoAction = () => {
  return {
    type: DEMO,
    payload: 'hello world'
  };
}

