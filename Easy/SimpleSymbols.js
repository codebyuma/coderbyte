/*Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable 
sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with 
several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by 
a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 

Score: 5 for results. 0 for time. 
UC notes: I spent a long time trying to figure out how to check if the character was not a letter. First i just checked 
if it was a number, but that failed some of my test cases. Then I realized it doesn't matter if it's a character, just 
that it's a letter. So I searched for a function to check if something is a letter and found the match() function. 
For next time: need to look up regex... */

function SimpleSymbols(str) { 
 var truth = true;

  	for (i=0; i<str.length; i++)
  	{
   	 if (str.charAt(i)!="+" && str.charAt(i)!="="){
       if (str.charAt(i-1)=="+" && str.charAt(i+1)=="+")
         truth = true;
       else if (str.charAt(i).match(/[a-z]/i))
         return "false"; 
     }
  	}
     str = truth;
 	 return str; 

}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());           
