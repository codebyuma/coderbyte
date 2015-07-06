/*Have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of 
integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules. The 
input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the 
E means take out the smallest integer currently in the whole set. When finished, your program should return that 
new set with integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then 
your program should return 4,1,5. 

Result: 10/10 - but failed first time because I forgot to convert to string at the end*/


function OffLineMinimum(strArr) { 
  var result = [];
  var min = [];
  for (i=0; i<strArr.length; i++){
    //if (strArr[i]<min && strArr[i]!="E")
    if (strArr[i]!="E")
      min.push(strArr[i]);
    else if (strArr[i]=="E"){
      min.sort();
      result.push(min[0]);
      min.shift(); 
    }
  }
  return result.toString();
         
}
   
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
OffLineMinimum(readline()); 