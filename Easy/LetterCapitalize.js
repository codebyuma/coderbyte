/*Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
Words will be separated by only one space. 

Score: 10/10
UC notes: Ran into the issue again where I knew exactly what I wanted to do, but I tried to access parts of the string as if 
it was an array instead of using charAt, and I also wanted to modify the string directly. It was easier to create a new string 
based on the original and return that.
Alternative would have been to split the string into words using the space as a delimiter and store into an array. Or use the replace 
function entirely to find and replace the characters. */

function LetterCapitalize(str) { 
  var finalString = "";
  finalString = finalString + str.charAt(0).toUpperCase();
  for (i=1; i<str.length; i++)
  {
    if (str.charAt(i-1)==" ") {
    	finalString = finalString + str.charAt(i).toUpperCase(); 
    }
    else
      finalString = finalString + str.charAt(i);
  }
  str = finalString;
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());           