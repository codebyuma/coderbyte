/*Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters 
in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 

UC note: For some reason, I really struggled with this. I didn't want to convert the string to an array first and was 
trying to figure out how to sort by manipulating strings... eventually I gave in and looked it up, and found a built-in array 
sorting function and so that's what I went with */

function AlphabetSoup(str) { 
 var final;
 final = str.split("");
  final.sort();
  final = final.join("");
  return final;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AlphabetSoup(readline());           
