/*Have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string 
true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should 
return the string true but if the input is 22 then the output should be the string false. */

function PowersofTwo(num) { 

  while (num>0){
  	if (num == 2)
      return true;
    else if (num % 2 !=0)
      return false;
    else{
      num = num / 2;
    }
  } 
  return true;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PowersofTwo(readline());                            
//PowersofTwo(4);      