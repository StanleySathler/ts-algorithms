import { Sortable } from './selection-sort';

export default class SortableNumber implements Sortable {
  constructor(
    private value: number
  ){}

  compareWith = (item: SortableNumber) => {
    if (this.value === item.value)
      return 0;

    if (this.value < item.value)
      return -1;

    if (this.value > item.value)
      return 1;
  }
}
