function maxRangeSum(arr) {
  var result = 0;
  for (var i = 4; i < 9; i++) {
    result += arr[i];
  }
  return result;
}

//test 1
console.log('expect 16', 'function prodoced: ', maxRangeSum([10, 7, -3, -10, 4, 2, 8, -2, 4, -5, -6]));
