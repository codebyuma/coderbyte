/*Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it 
(ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.

Result: 10/10*/

function FirstFactorial(num) { 
  var total = num;
  for (i=num-1; i>1; i--)
  {
    
    total = total * i;
  }
  num = total;
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());           
