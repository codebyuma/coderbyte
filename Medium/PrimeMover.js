/* Have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 
the output should be 53 as 53 is the 16th prime number. 

----
UC notes: I needed to look up prime numbers agan. Additional delays were because I realized I didn't understand the question
correctly and what to return. Once I did, it was easy to resolve. */

function isPrime (num){

  if (num<2)
    return false;
  else{
  	for (i=2; i<num; i++){
    	if (num % i == 0)
          return false;
    }
    return true;
  }
}

function PrimeMover(num) { 
    count =0;
    for (j=0; j<10000; j++){
       //console.log(j + " " + isPrime(j));
    	if (isPrime(j)){
          
          count++;
          if (count == num)
          	return j;
        }
    }
   return 0;

}


   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeMover(readline()); 
//PrimeMover(9);           
