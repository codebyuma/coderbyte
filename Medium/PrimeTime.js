/*Have the function PrimeTime(num) take the num parameter being passed and return the string 
true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16. 

Result: 10/10
*/

function PrimeTime(num) { 
  var divs = [2,3,4,5,6,7,8,9];
  
  for (i=0; i<divs.length; i++){
    if (num != divs[i] && num % divs[i] == 0)
      return false;
  }
  return true;

         
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeTime(readline());   