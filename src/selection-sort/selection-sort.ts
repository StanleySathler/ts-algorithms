// type item = number;
// type items = item[];

export interface Sortable {
  compareWith: (item: Sortable) => number;
}

const findSmallestIndex = (arr: Sortable[], cursor: number) => {
  let index = cursor;
  for (let i = (cursor + 1); i < arr.length; i++)
    if (arr[i].compareWith(arr[index]) < 0)
      index = i;

  return index;
};

const swap = (arr: Sortable[], a: number, b: number) => {
  const aux = arr[a];
  arr[a] = arr[b];
  arr[b] = aux;
};

export const sort = (arr: Sortable[]) => {
  for (let cursor = 0; cursor < (arr.length - 1); cursor++) {
    const smallest = findSmallestIndex(arr, cursor);
    swap(arr, cursor, smallest);
  }
};
