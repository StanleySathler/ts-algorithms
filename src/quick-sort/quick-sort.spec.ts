import quickSort from './quick-sort';

const match = (received, expected) => {
  quickSort(received, 0, received.length);
  expect(received).toEqual(expected);
}

describe('QuickSort', () => {
    it('[1, 2, 3, 4, 5, 6]', () => {
      match([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
    });

    it('[6, 5, 4, 3, 2, 1]', () => {
      match([6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6]);
    })

    it('[-2, 0, 0, 1, 5]', () => {
      match([-2, 0, 0, 1, 5], [-2, 0, 0, 1, 5]);
    })
});
