/*Have the function ExOh(str) take the str parameter being passed and return the string true if there 
is an equal number of x's and o's, otherwise return the string false. Only these two letters will be 
entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output 
should return false because there are 6 x's and 5 o's. */

function ExOh(str) { 
   var xcount=0, ycount=0;
   for (i=0; i<str.length; i++){
     if (str.charAt(i)=="x")
       xcount++;
     else if (str.charAt(i)=="o")
       ycount++;
	}
  return xcount==ycount;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());           
