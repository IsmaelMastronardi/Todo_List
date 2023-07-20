// eslint-disable-next-line import/no-extraneous-dependencies
import { JSDOM } from 'jsdom';
import {
  addTask,
  removeTasks,
  edit,
  switchCompleted,
} from './funcT.js';

const dom = new JSDOM('<!DOCTYPE html><body><p id="main">My First JSDOM!</p></body>');

global.window = dom.window;
global.document = window.document;
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

describe('addTask', () => {
  it('Adding a new object of tasks and save it in Local Storage', () => {
    const expectedList = [
      {
        completed: false,
        description: 'text',
        index: 1,
      },
    ];

    addTask();
    expect(JSON.parse(localStorage.store.tasks)).toStrictEqual(expectedList);
  });
});

describe('remove', () => {
  it('Deleting an existing object task from the Local Storage using its index', () => {
    const removeindex = 1;
    const removeList = [
      {
        index: 1,
        description: 'Testing Part 2',
        completed: false,
      },
    ];

    localStorage.setItem('tasks', removeList);

    removeTasks(removeindex);
    expect(JSON.parse(localStorage.store.tasks)).toStrictEqual('[]');
  });
});

describe('edit function', () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <textarea id='text-area-1'>Changed Value</textarea>
        <textarea id='text-area-2'></textarea>
      `;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('allows one to update the description of the task at a particular index', () => {
    const newText = dom.window.document.querySelector('#text-area-1').value;
    const expectedList = [
      {
        completed: false,
        description: 'Changed Value',
        index: 1,
      },
    ];

    edit(newText);

    expect(JSON.parse(localStorage.store.tasks)).toStrictEqual(expectedList);
  });
});

describe('Operations on Completed tasks', () => {
  describe('completedmylist', () => {
    it('should toggle completed attribute of a task in the localStorage', () => {
      const toggleId = 1;
      const toggleList = [
        {
          id: 1,
          desc: 'Testing Part 1',
          completed: false,
        },
      ];
      const localExpected = [
        {
          id: 1,
          desc: 'Testing Part 1',
          completed: true,
        },
      ];

      localStorage.setItem('tasks', toggleList);

      switchCompleted(toggleId);
      expect(JSON.parse(localStorage.store.tasks)).toStrictEqual(
        localExpected,
      );
    });
  });
});

global.localStorage = localStorageMock;