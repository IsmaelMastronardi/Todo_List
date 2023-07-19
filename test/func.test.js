import {
  addTask,
  remove
} from './func.test.js';

const localStorageMock = (() => {
  let store = {};

  return {
    store,
    getItem: (key) => store[key] || [],
    setItem: (key, value) => {
      store[key] = JSON.stringify(value);
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

global.localStorage = localStorageMock;