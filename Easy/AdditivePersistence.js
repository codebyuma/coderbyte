/*Have the function AdditivePersistence(num) take the num parameter being passed which will always be a 
positive integer and return its additive persistence which is the number of times you must add the digits 
in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 
2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 
Result: 10/10 - but failed first time because I forgot to account for input that's already a single digit.
bonus - I made it recursive! */


function AdditivePersistence(num, count) { 
  if (count == undefined)
    count =0;
  var sum =0;

  if (num<10)
    return 0;

  while (Math.floor(num/10)!=0){
    sum = sum + num%10;
    num = Math.floor(num / 10);
  }
  sum = sum + num%10;
  count++;
  if (Math.floor(sum/10)!=0)
    return (AdditivePersistence(sum,count));
  else
    return count;
  
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AdditivePersistence(readline());           
