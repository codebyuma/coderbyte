/*Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order

Result: 10 points. Passed all 5 tests. Completed in 6 minutes.
UC notes: only issue I ran into is that I first approached this by loading the characters of a string into an array, so the output was 
an array. Then I tried converting the array into string and returned a string with commas. Then finally, I realized that I could just 
avoid the array and append to a string using the plus sign and that solved the problem. */

function FirstReverse(str) { 

  var tempStr = "";
  for (i=str.length; i>0; i--)
  {
       tempStr=tempStr+str[i-1];
  }
  str = tempStr;
  return str; 
         
}

//When running outside of the Coderbyte console, replace this function call with:
//FirstReverse("coderbyte"); and replace the word in the quotation marks   
FirstReverse(readline());   