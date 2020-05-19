const swap = (arr: number[], a: number, b: number) => {
  const aux = arr[a];
  arr[a] = arr[b];
  arr[b] = aux;
};

const insertionSort = (arr: number[]) => {
  for(let cursor = 1; cursor < arr.length; cursor++) {
    for(let j = cursor; j >= 0; j--) {
      if (arr[j] < arr[j - 1])
        swap(arr, j, (j - 1));
    }
  }
};

export default insertionSort;
