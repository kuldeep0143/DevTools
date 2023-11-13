function flattenArray(input) {
    let flateArray = [];
    function flatten(input) {
        input.forEach(num => {
            if (Array.isArray(num)) {
                flatten(num);
            }
            else {
                flateArray.push(num);
          }
        })
    }
    flatten(input);
    return flateArray;

}
var input = [
  1, 2, 3,
   [4],
  [5, 6, [7], [8, [9, [10]]]],
  11, 12, 13,
  [14, [[[[[15, [16]]]]]]],
  17, 18,
  [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
];
 
console.log(flattenArray(input));
