/*Have the function MultiplicativePersistence(num) take the num parameter being passed which will always 
be a positive integer and return its multiplicative persistence which is the number of times you must 
multiply the digits in num until you reach a single digit. For example: if num is 39 then your program 
should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4. 
Result: 10/10 
bonus - I made it recursive! */


function MultiplicativePersistence(num, count) { 
  if (num<10)
    return 0;
  
  var product=1;
  if (count==undefined)
     count=0;
  
  while (Math.floor(num/10)!=0){
    product = (num%10) * product;
   	num = Math.floor(num/10); 
  }
  product = (num%10) * product;
  count++;
  
  if (Math.floor(product/10)!=0){
    return (MultiplicativePersistence(product,count));
  }
  else
    return count;

         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MultiplicativePersistence(readline());                  
