/*Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, 
respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. 
The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 
Result: 10/10
*/

function SecondGreatLow(arr) { 
  var secondLowest;
  var secondHighest;
  var sortedArray = arr.sort ( function (a,b) 
      { return a - b; } );
  if (sortedArray.length == 2)
    return (sortedArray[1] + " " + sortedArray[0]);
  
  if (sortedArray[0]!=sortedArray[1])
       secondLowest = sortedArray[1];
  else
  {
    secondLowest=sortedArray[0];
    for (i=1; i<sortedArray.length; i++){
      if (sortedArray[i]!=secondLowest){
        secondLowest=sortedArray[i];
        break;
      }
    }
    
  }

  if (sortedArray[sortedArray.length-1]!=sortedArray[sortedArray.length-2])
    secondHighest=sortedArray[sortedArray.length-2];
  else{
    secondHighest=sortedArray[sortedArray.length-1];
  	 for (i=sortedArray.length-1; i>=0; i--){
      if (sortedArray[i]!=secondHighest){
        secondHighest=sortedArray[i];
        break;
      }
    }
  }
  return (secondLowest + " " + secondHighest);
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());           