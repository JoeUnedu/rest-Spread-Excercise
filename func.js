// refactor the function to use the rest operator and arrow function
//Given this function:
/*
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

function filterTheOdds() {
  args = Array.from(arguments);
  return args.filter((num) => {
    return num % 2 === 0;
  });
}

let filterTheOddsHolder = filterTheOdds(1, 2, 3, 4, 5, 6, 7, 13, 8);
console.log(filterTheOddsHolder)

*/

function filterThisOdds(...args) {
  return args.filter((num) => num % 2 === 0);
}
let filterThisOddsHolder = filterThisOdds(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(filterThisOddsHolder);

// find min with rest and spread operator.
//findMin(1,4,12,-3) // -3

function findMin(...num) {
  let minNumHolder = num.reduce((newNum, min) => {
    if (newNum < min) {
      min = newNum;
    }
    return min;
  });
  return minNumHolder;
  /*
  return num.reduce((newNum, num) => (newNum < min ? newNum : min));
  */
}
let finMinHolder = findMin(1, 4, 12, -3);
console.log(finMinHolder);

//Write a function called mergeObjects that accepts
//two objects and returns a new object which contains all the keys and values
// of the first object and second object.
// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

let mergObjectHolder = mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
console.log(mergObjectHolder);

function mergeMyObjects(obj1, obj2) {
  let newObj = { ...obj1 };
  let obj2Holder = { ...obj2 };

  // let us add the  key and value to the newObj
  //
  for (let key in obj2Holder) {
    //let key of Object.keys(obj2)

    if (newObj[key]) {
      newObj[key] += obj2Holder[key];
    } else {
      newObj[key] = obj2Holder[key];
    }
  }
  return newObj;
}
let mergeMyObjectsHolder = mergeMyObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
console.log(mergeMyObjectsHolder);

/*
Write a function called doubleAndReturnArgs which 
accepts an array and a variable number of arguments. 
The function should return a new array
 with the original array values and all of additional arguments doubled.

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]
*/
function doubleAndReturnArgs(originalArr, ...numArg) {
  // original array maitained.
  let originalArrHolder = [...originalArr];

  numArg.map((doubleArg) => {
    originalArrHolder.push(doubleArg * 2);
  });
  return originalArrHolder;
}
let doubleAndReturnArgsHolder = doubleAndReturnArgs([1, 2, 3], 4, 4);
console.log(doubleAndReturnArgsHolder);

/*
Slice and Dice!
For this section, write the following functions using rest,
 spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array 
or object and not modifying the existing inputs.
*/
/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
  let myRandomHolder = Math.floor(Math.random() * items.length);
  let eHolder = items.filter((e) => {
    return e !== myRandomHolder;
  });
  return eHolder;
}
let removeRandomHolder = removeRandom([1, 2, 3, 4, 5, 6]);
console.log(removeRandomHolder);

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [...array1, ...array2];
}

let extendHolder = extend([4, 5, 6], [8, 9]);
console.log(extendHolder);

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  /*
  let objHolder = obj.map((obj1) => {
    */
  return { ...obj, [key]: val };
}
let addKeyValHolder = addKeyVal(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "title",
  "instructor"
);
console.log(addKeyValHolder);
/** Return a new object with a key removed. */

function removeKey(obj, key) {
  let newObj = { ...obj[key] };
  delete newObj[key];
  return newObj;
}

let removeKeyHolder = removeKey({ person: "Elie" }, { chief: "Tim" });
console.log(removeKeyHolder);

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
let combineHolder = combine({ scientist: "Elie" }, { philosopher: "Tim" });
console.log(combineHolder);
/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  let updateObj = { ...obj };
  if (updateObj[key]) {
    updateObj = val;
  }
  return updateObj;
}
