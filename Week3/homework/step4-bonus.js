'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
const values1 = [1, 2, 3, 4, 1, 5, 2];

// Add your function here. Try and come up with a good name for this function
function uniqueArray(arr) {
  let identicalArray = [];
  //this is less expensive, so that the length is predifiend and it will not be calculated at every itiration of the for loop
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    //checking if arr[i] is NOT exist (-1) at the identicalArray, if not, then we push it. else, we skip it
    if (identicalArray.indexOf(arr[i]) === -1) {
      identicalArray.push(arr[i])
    }
  }
  //console.log(identicalArray);
  return identicalArray;
}

const uniqueValues = uniqueArray(values1);
console.log(uniqueValues);



