/*Challenge: Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize 
every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

Score: 5 points for passing all tests. 0 points for taking 36 minutes to complete
UC notes: 
- My main challenge was figuring out how to determine if it's a letter or not. Before then, I also hit an infinite loop situation. 
- Once I figured out how to tell if it's a letter or not, then I had to figure out the best way to convert the vowels.
- possible improvements - determine if there's a better way to get the next letter in the alphabet using an already created 
  function in javascript. Look for something similar for the vowels. */

function LetterChanges(str) { 

  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var str2 = "";
  var j=0;
  for (i=0; i<str.length; i++){
  	if (isNaN(str[i]))
    {
      while (alphabet[j]!=str[i]){
    	j++;
        if (j==alphabet.length)
          break;
      }
      if (j==alphabet.length)	
      	str2=str2+str[i];
      else
      {
        if (alphabet[j+1]=="a" || alphabet[j+1]=="e" || alphabet[j+1]=="i" || alphabet[j+1]=="o" || alphabet[j+1]=="u")
        	str2=str2+(alphabet[j+1].toUpperCase());
        else
           str2=str2+alphabet[j+1];
      }
      j=0;
    }
    else
      str2=str2+str[i];
     
  };
  
  str=str2;
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());           
