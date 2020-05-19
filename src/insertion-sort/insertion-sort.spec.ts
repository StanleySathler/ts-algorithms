import insertionSort from './insertion-sort';

const match = (received, expected) => {
  insertionSort(received);
  expect(received).toEqual(expected);
}

describe('Insertion Sort', () => {
    it('[1, 2, 3, 4, 5, 6]', () => {
      match([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
    });

    it('[6, 5, 4, 3, 2, 1]', () => {
      match([6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6]);
    })
});
