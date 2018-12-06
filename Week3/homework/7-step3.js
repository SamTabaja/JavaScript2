'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  //console.log("inside f1:  " + val);
  return val;
}

f1(x);

console.log(x);


const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  //console.log("inside f2:  " + val.x);
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here

/*
at f1():
it was pass by value, which means, the variable will be only changed inside the fucntion f1() but will never affect the outside.
and we can prove that, by console.log(val.x) inside the function f1, which returns 10. Where the console.log(x) will always return 9
no matter what happens inside f1.



at f2():
it was pass by reference, which means, the varibale will be changed or affected inside and also outside the fucntion f2().
we can also prove that by consolde.log(val) insde the function f2, which will be exactly the same as if we are console.log(y) out
side the function f2(). and the results will be always {x:10}. the pass by reference applies when we are dealing with OBJECTS such as
array functions and objects.
*/