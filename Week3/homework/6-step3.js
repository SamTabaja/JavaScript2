'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem

for (var i = 0; i < arr3d.length; i++) {
  for (var j = 0; j < arr3d[i].length; j++) {
    console.log(arr3d[i][j]);
  }
}


//console.log(arr3d.length);
//console.log(arr2d.length);



// i guess, for the K dimensions array, we will need one loop for each dimension
// i.e, 4 dimension, then we will need 4 loops 