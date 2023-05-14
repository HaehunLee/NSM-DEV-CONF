import { atom, AtomEffect } from 'recoil';

import { StudyModel } from '../interfaces';

const localStorageEffect: AtomEffect<[]> = ({ setSelf, onSet, node }) => {
  if (typeof window !== 'undefined') {
    const savedValue = window.localStorage.getItem(node.key);
    if (
      savedValue !== null &&
      savedValue !== 'null' &&
      JSON.parse(savedValue)
    ) {
      setSelf(JSON.parse(savedValue));
    }
  }

  onSet((newValue) => {
    window.localStorage.setItem(node.key, JSON.stringify(newValue));
  });
};

export const MyStudiesState = atom<StudyModel[]>({
  key: 'MyStudiesState',
  default: [],
  effects: [localStorageEffect],
});
