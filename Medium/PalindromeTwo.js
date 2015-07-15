/*Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, 
(the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols 
but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should 
return true. 

Result: 10/10
*/

function PalindromeTwo(str) { 
  str=str.toLowerCase();
  var j = str.length-1;
  for (i=0; i<(str.length/2); i++){
  	/*// if character is a space or a special character (when you convert 
  		a special character to upper or lowercase, it remains the same), then move to the next index position*/
  	while (str.charAt(i)==" " || (str.charAt(i).toUpperCase()==str.charAt(i).toLowerCase())) 
  	    i++;
  	while (str.charAt(j)==" " || (str.charAt(j).toUpperCase()==str.charAt(j).toLowerCase()))
  	    j--;
  	//compare the two letters
  	if (str.charAt(i)!=str.charAt(j)){
      return false;
    }
    j--; 
  }
  return true;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PalindromeTwo(readline());       