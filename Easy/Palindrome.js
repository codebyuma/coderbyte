/*Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter 
is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: 
"racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. */

function Palindrome(str) { 
  str = str.split(" "); // remove spaces while converting string into array
  str = str.join(""); // turn array back into string
  for (i=0; i<str.length/2; i++)
    if (str.charAt(i)!=str.charAt(str.length-1-i))
      return false;

  return true;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());           
