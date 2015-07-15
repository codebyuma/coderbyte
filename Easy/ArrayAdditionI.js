/*Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string
 true if any combination of numbers in the array can be added up to equal the largest number in the array, 
 otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return 
 true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. 

Original Result: 8/10 - failed two test cases and lost one point for time

1. When the input was (1,2,3,4) your output was incorrect.
2. When the input was (54,49,1,0,7,4) your output was incorrect.

Figured it out pretty quickly - I could just figure out what the difference is between the largest and the sum, and see if that number is 
in the array. If it is, then return true because just by subtracting that number gives us a total = largest.

Updated code below 

*/



function findLargest(arr){
    var largest = arr[0];
    for (i=0; i<arr.length; i++){
        if (arr[i]>largest)
         largest = arr[i];
    }
    return largest;
}


function ArrayAdditionI(arr) { 
  /* Removing the following. Found that a sorted array didn't really help me

  var sortedArray = arr.sort(function (a, b) {return a>b;
  });
  largest = sortedArray[sortedArray.length-1];*/

 largest = findLargest(arr);
 

  var sum =0;
  // first add up all values and if at any point sum == largest, return true
  for (i=0; i<arr.length; i++){
    if (arr[i]==largest){
        continue;
    }
    else{
        sum+=arr[i];
    }
    if (sum==largest)
        return true;
  }
  // calculate the difference between sum and the largest number. If that difference is a number in the array, return true
  var diff = sum-largest;
  if (arr.indexOf(diff)!= -1)
    return true;

  // otherwise, start reducing the sum/total by each number in the array one by one to see if you can reach a total == largest
  for (j=0; j<arr.length; j++){
    if (arr[j]==largest)
    { 
        continue;
    }
    else{
        sum-=arr[j];
    }
    if (sum==largest)
        return true;    
  }
  
  return false;
  
  
}
ArrayAdditionI(readline());     