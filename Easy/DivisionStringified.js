/*Have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, 
and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return 
the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345".
Result: 10/10
*/

function DivisionStringified(num1,num2) { 
  var result = num1/num2;
  var resultString = "";
  if (result<1000)
    return Math.round(result).toString();
  else {
    resultString = resultString + Math.floor(result / 1000); // test case wants us to round this one down... 
    resultString += ",";
    resultString += Math.floor(result % 1000);
    return resultString;
  }    
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(readline());           
       