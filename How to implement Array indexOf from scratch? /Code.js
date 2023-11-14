function customIndexOf(array, searchElement, fromIndex = 0) {
  // Check negative fromIndex
  fromIndex =
    fromIndex >= 0 ? fromIndex : Math.max(0, array.length + fromIndex);

  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }

  return -1;
}

// Example usage:

const array = [1,5,8,9,6,7,4,2,15];

console.log(customIndexOf(array, 2)); // Output: 7
console.log(customIndexOf(array, 7)); // Output: 5
console.log(customIndexOf(array, 9, 2)); // Output: 3
console.log(customIndexOf(array, 2, 4)); // Output: 7
console.log(customIndexOf(array, 10)); // Output: -1
