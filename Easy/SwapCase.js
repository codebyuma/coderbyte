/*
Have the function SwapCase(str) take the str parameter and swap the case of each character. 
For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. 

Result: 10/10
*/

function SwapCase(str) { 
  var resultStr ="";
  for (i=0; i<str.length; i++){
  	if (isNaN(str.charAt(i))){
      if (str.charAt(i).toUpperCase() == str.charAt(i))
        resultStr += str.charAt(i).toLowerCase();
      else
        resultStr += str.charAt(i).toUpperCase();
    }
    else{
    	resultStr += str.charAt(i);
    }
  }
  return resultStr; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());           
