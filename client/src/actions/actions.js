import axios from 'axios';

export const DEMO = 'DEMO';
let nextId = 0;

export const demoAction = (text) => {
  return {
    type: DEMO,
    text: text,
    id: nextId++
  };
}

