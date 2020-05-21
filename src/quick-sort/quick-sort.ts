function swap<TItem> (arr: TItem[], a: number, b: number) {
  const aux = arr[a];
  arr[a] = arr[b];
  arr[b] = aux;
}

function partition<TSortable> (
  arr: TSortable[],
  start: number,
  end: number,
  comparator: (a: TSortable, b: TSortable) => number
) {
  const pivot = start;
  let x = start;
  let k = end;

  while (x < k) {
    do { x++ } while (comparator(arr[x], arr[pivot]) <= 0);
    do { k-- } while (comparator(arr[k], arr[pivot]) > 0);

    if (x < k)
      swap(arr, x, k);
  }

  swap(arr, pivot, k);
  return k;
}

export default function quickSort<TSortable> (
  arr: TSortable[],
  first: number,
  last: number,
  comparator: (a: TSortable, b: TSortable) => number
) {
  if (first < last) {
    const j = partition(arr, first, last, comparator);
    quickSort(arr, first, j, comparator);
    quickSort(arr, (j + 1), last, comparator);
  }
}
