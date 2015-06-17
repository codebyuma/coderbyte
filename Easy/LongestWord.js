/*Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 

UC notes: I knew I wanted to split the sentence/string into an array, didn't know how, so I googled it. 
Found the split function, which takes a string and splits it up into an array using the delimiter you specify.
Then I knew there had to be a simple way to replace all special characters. Found the replace function and used that as the first step.
Score: 10/10
*/

function LongestWord(sen) { 
  sen = sen.replace(/[^a-zA-Z0-9 ]/g, '');
  var words = sen.split(/ /);
  var longestWord = words[0];
  var longestLength = longestWord.length;
  for (i=0; i<words.length; i++)
  {
    if (words[i].length > longestLength){
      longestWord = words[i];
      longestLength=longestWord.length;
    }
      
  }
  sen = longestWord.toString();
  return sen; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());           
