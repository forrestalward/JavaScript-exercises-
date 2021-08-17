// Problem: Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

// Finally, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior.

// The function call range(1, 10, 2) should return 1, 3, 5, 7, 9.

// Make sure it also works with negative step values so that range(5, 2, -1) produces 5, 4, 3, 2.

// For example, if start is 0, end is 5, and step is 1. your array should be 0,1,2,3,4,5 If start is 0, end is 5, and step is 2, your array should be 0,2,4 If start is 0, end is 5, and step is 3, your array should be 0,3 If start is 5, end is 0, and step is -1, your array should be 5,4,3,2,1 If start is 5 end is 0, and step is -3, your array should be 5,2



// code start: 

// range function
function range( start, end, increment ) {
  
    // create the result array
    var result = [];
    
    // test to see if we have an increment, otherwise set it to 1
    if ( increment == undefined )
      increment = 1;
    
    // calculate the number of times to loop (this is because you might be going 
    // up or down with your increment)
    numLoops = Math.abs( (end - start)/ increment ) + 1 ;
    
    // loop that many times
    for ( var i = 0; i < numLoops; i ++ ) {
    
      // add (push) the value of start to the array
      result.push( start );
       
      // increment the value of start
      start += increment;
    }
    
    // return the array with all the things in it
    return result;
  }
  
  function sum( numArray ) {
    // set a variable to hold the sum
    var arrayTotal = 0;
    
    // see how many numbers are in the array
    numLoops = numArray.length;
    
    // loop that many times
    for ( var i = 0; i < numLoops; i ++ ) {
      // add the number at that index to the sum
      arrayTotal += numArray[i];
    }
    // return the sum
    return arrayTotal;
  }
  
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55