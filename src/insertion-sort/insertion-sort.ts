function swap<TItem> (arr: TItem[], a: number, b: number) {
  const aux = arr[a];
  arr[a] = arr[b];
  arr[b] = aux;
}

export default function insertionSort<TSortableItem> (
  arr: TSortableItem[],
  comparator: (a: TSortableItem, b: TSortableItem) => number
) {
  for(let cursor = 1; cursor < arr.length; cursor++) {
    for(let j = cursor; j > 0; j--) {
      if (comparator(arr[j], arr[j-1]) < 0)
        swap<TSortableItem>(arr, j, (j - 1));
    }
  }
}
