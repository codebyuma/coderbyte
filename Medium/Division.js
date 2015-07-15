/*Have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. 
That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16 
both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3. 

Result: 10/10
*/

function Division(num1,num2) { 

	// if either number is equally divisble by the other, then one is the GCF
  	if (num1 % num2 ==0) 
      return num2;
    else if (num2 % num1 == 0)
      return num1;
    
  	// depending on which number is larger, count down from that number until you find a value that is equally divisible by both. 
  	// As we are counting down, that number will be the GCF 
    if (num1 > num2){
    	for (i=num2; i>=0; i--){
    		if ((num2 % i ==0) && (num1 % i ==0))
                return i;
    	}
    }
    else{
    	for (i=num1; i>=0; i--){
    		if ((num2 % i ==0) && (num1 % i ==0))
                return i;
    	}
    }
               
  
  
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Division(readline());      