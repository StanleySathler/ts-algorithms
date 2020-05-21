function swap (arr: number[], a: number, b: number) {
  const aux = arr[a];
  arr[a] = arr[b];
  arr[b] = aux;
}

function partition (arr: number[], start: number, end: number) {
  const pivot = start;
  let x = start;
  let k = end;

  while (x < k) {
    do { x++ } while (arr[x] <= arr[pivot]);
    do { k-- } while (arr[k] > arr[pivot]);

    if (x < k)
      swap(arr, x, k);
  }

  swap(arr, pivot, k);
  return k;
}

export default function quickSort (arr: number[], first: number, last: number) {
  if (first < last) {
    const j = partition(arr, first, last);
    quickSort(arr, first, j);
    quickSort(arr, (j + 1), last);
  }
}
