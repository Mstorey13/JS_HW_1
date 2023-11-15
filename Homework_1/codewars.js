// Sum of Positive
function positiveSum(arr) {
    return arr.reduce((x,y) => x + (y > 0? y : 0), 0) 
  }

  // Array.prototype.reduce()
  // (previousvalue, currentvalue) => previousvalue + currentvalue
  // Ternary operator "?" runs when one condition is true and another false

// Who likes it 
function likes(names) {
    if (names.length == 0) {
      return "no one likes this";
    } else if (names.length == 1) {
      return names[0] + " likes this";  
    } else if (names.length == 2) {
      return names[0] + " and " + names[1] + " like this";
    } else if (names.length == 3) {
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else {
      return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }
  }

// Array.diff
function arrayDiff(a, b) {
    let r = [];
    for (let i = 0; i < a.length; i++) {
      if (!b.includes(a[i])) {
        r.push(a[i]);
      }
    }
    return r;
  }
  
  // Define a return for array
  // For loop
  // check a[i] to see if element is in array b, if not push to return array

// Persistant Bugger.
function persistence(num) {
    let result = 0,
     str = String(num)
    while (str.length > 1) {
      str = String([...str].reduce((prev,curr) => prev * curr))
      result ++
    }
   return result
 }
 
 // Result is going to be the count
 // Reduce down and do multiplcation on each digit
 // Turn back into string