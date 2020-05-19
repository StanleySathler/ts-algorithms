import insertionSort from './insertion-sort';

const comparator = (a: number, b: number) => (
  a < b
    ? -1
    : 1
);

const match = (received, expected) => {
  insertionSort<number>(received, comparator);
  expect(received).toEqual(expected);
}

describe('Insertion Sort', () => {
    it('[1, 2, 3, 4, 5, 6]', () => {
      match([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
    });

    it('[6, 5, 4, 3, 2, 1]', () => {
      match([6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6]);
    })

    it('[-2, 0, 0, 1, 5]', () => {
      match([-2, 0, 0, 1, 5], [-2, 0, 0, 1, 5]);
    })

    it('Should be stable', () => {
      type Person = { id: number, name: String };
      const arr = [
        { id: 1, name: 'Stanley' },
        { id: 1, name: 'Bella' },
        { id: 5, name: 'John Doe' }
      ];

      const idComparator = (a: Person, b: Person) => (
        a.id < b.id
          ? -1
          : 1
      );

      insertionSort<Person>(arr, idComparator);

      expect(arr).toEqual([
        { id: 1, name: 'Stanley' },
        { id: 1, name: 'Bella' },
        { id: 5, name: 'John Doe' }
      ]);
    })
});
