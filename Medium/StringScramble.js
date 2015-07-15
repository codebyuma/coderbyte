/*Have the function StringScramble(str1,str2) take both parameters being passed and return the string true if a portion of 
str1 characters can be rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" 
the output should return true. Punctuation and symbols will not be entered with the parameters. 
Result: 10/10
*/

function StringScramble(str1,str2) { 

  // if the first string is shorter than the result string, then it can't possible have all the letters to spell the result world
  if (str1.length<str2.length)
    return false;
  
  // go through each letter of the result string. if you can't find that letter anywhere within the str1, then we can't spell the word - return false
  for (i=0; i<str2.length; i++){
  	if (str1.indexOf(str2.charAt(i))==-1)
      return false;
  }
  return true;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
StringScramble(readline());           
