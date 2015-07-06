/*Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 
0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). T
he array will not be empty, will only contain positive integers, and will not contain more than one mode. 
Result: 10/10
*/

function MeanMode(arr) { 
  var mean;
  var mode;
  var modeCount=1;
  var sum=0;
  var tempCount=0;
  mode = arr[0];
  
  for (i=0; i<arr.length; i++){
  	 sum+=arr[i];	
     for (j=0; j<arr.length; j++){
     	if (arr[j] == arr[i])
          tempCount++;
     }
     if (tempCount>modeCount){
     	mode = arr[i];
        modeCount = tempCount;
     }
     tempCount=0;
  }
  mean = sum / arr.length;

  if (mode == mean)
    return 1;
  else
    return 0;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());           
