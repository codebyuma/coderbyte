/*Have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num 
will be any number from 1 to 1000. 

UC note: easy, did it in one minute. */

function SimpleAdding(num) { 
  var total=0;
  
  for (i=0; i<=num; i++){
  	total = total + i; /
  }
  return total;  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleAdding(readline());           
