'use strict';


function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  for (var i = startIndex; i <= stopIndex; i++) {
    values.push(i);
  }

  values.forEach(function (e) {
     // if you add this if statement at the end of the if/else it wont work

     if (e % 5 == 0) {
      console.log(e + " is divisible by only" );
       fiveCallback();
     }
     if (e % 3 == 0) {
      console.log(e + " is divisible by only");
       threeCallback();
     }
  });

}

let sayThree = function () {
  console.log("3");
  
};

let sayFive = function () {
  console.log("5");
  
};


threeFive(10, 15, sayThree, sayFive)