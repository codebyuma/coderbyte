/*Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters 
a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result 
in true because there is exactly three characters between a and b). Otherwise return the string false. 

Result: failed one test because I didn't account for the b being before the a, example: bzzza. */

function ABCheck(str) { 
  for (i=0; i<str.length; i++){
    if (str.charAt(i)=="a"){
    	if (str.charAt(i+4) == "b")
          return true;
    }
   }
   return false; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());      