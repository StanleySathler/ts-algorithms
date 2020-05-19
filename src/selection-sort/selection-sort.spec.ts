import * as SelectionSort from './selection-sort';
import SortableNumber from './sortable-number'

describe('Selection Sort', () => {
  describe('SortableNumber', () => {
    it('[1, 2, 3, 4, 5, 6]', () => {
      const arr = [
        new SortableNumber(1),
        new SortableNumber(2),
        new SortableNumber(3),
        new SortableNumber(4),
        new SortableNumber(5),
        new SortableNumber(6)
      ];

      const copy = [...arr];
      SelectionSort.sort(copy);

      expect(copy).toEqual([
        arr[0],
        arr[1],
        arr[2],
        arr[3],
        arr[4],
        arr[5]
      ]);
    });

    it('[6, 5, 4, 3, 2, 1]', () => {
      const arr = [
        new SortableNumber(6),
        new SortableNumber(5),
        new SortableNumber(4),
        new SortableNumber(3),
        new SortableNumber(2),
        new SortableNumber(1)
      ];

      const copy = [...arr];
      SelectionSort.sort(copy);

      expect(copy).toEqual([
        arr[5],
        arr[4],
        arr[3],
        arr[2],
        arr[1],
        arr[0]
      ]);
    });

    it('[0, 0, 0, 0, 0, 0]', () => {
      const arr = [
        new SortableNumber(0),
        new SortableNumber(0),
        new SortableNumber(0),
        new SortableNumber(0),
        new SortableNumber(0),
        new SortableNumber(0)
      ];

      const copy = [...arr];
      SelectionSort.sort(copy);

      expect(copy).toEqual([
        arr[0],
        arr[1],
        arr[2],
        arr[3],
        arr[4],
        arr[5]
      ]);
    });

    it('[-2, -5, 999, 1, 0, 1]', () => {
      const arr = [
        new SortableNumber(-2),
        new SortableNumber(-5),
        new SortableNumber(999),
        new SortableNumber(1),
        new SortableNumber(0),
        new SortableNumber(1)
      ];

      const copy = [...arr];
      SelectionSort.sort(copy);

      expect(copy).toEqual([
        arr[1],
        arr[0],
        arr[4],
        arr[3],
        arr[5],
        arr[2]
      ]);
    });
  })
});
