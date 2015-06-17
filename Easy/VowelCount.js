/*Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the 
string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge. */

// UC note: I'm sure this could be done in a more efficient way. Will investigate for next time.

function VowelCount(str) { 
 
  var count =0;
  str = str.toLowerCase();
  for (i=0; i<str.length; i++){
  	if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u")
  		count++;
  }
  return count; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());           
