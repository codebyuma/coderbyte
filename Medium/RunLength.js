/* Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string 
using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character 
and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would 
return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols. 

---
UC notes: I was counting all unique characters together, so all Ws at once, so wwwxxw would be 4w2x. 
But one of the test cases wanted 3w2x1w instead. Changing this around took a bit more time */

function RunLength(str) { 
  var final = "";
  var character="";
  var count =0;
  var unique;
  for (i=0; i<str.length; i++)
  {

    if (str.charAt(i)!=character){
      character = str.charAt(i);
    	for (j=i; j<str.length; j++){
      		if (str.charAt(j)==character)
        		count++;
            if (str.charAt(j+1)!=character)
              break;
    	}
    	final = final + count + character;
    	count = 0;
    }
    
  }
  // code goes here  
  return final; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
RunLength(readline());           
