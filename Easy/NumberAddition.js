/*
Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, 
then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate 
between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two 
different answers. Each string will contain at least one letter or symbol. 

Input = "75Number9"Output = 84
Input = "10 2One Number*1*"Output = 13

Result: 8 / 10 - lost points on time.

*/

function NumberAddition(str) { 

 var sum =0;
 for (i=0; i<str.length; i++){
 	if (Number(str.charAt(i))!==0 && !isNaN(Number(str.charAt(i)))){
    	var temp = str.charAt(i);
        while (Number(str.charAt(i+1))!==0 && !isNaN(Number(str.charAt(i+1)))){
          temp = temp + str.charAt(i+1);
          i++;
        }
        if (Number(str.charAt(i+1)==0))
            temp = temp + str.charAt(i+1);
        sum += Number(temp);
    }
 }
 return sum;
}
   
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberAddition("10 2One Number*1*"); 