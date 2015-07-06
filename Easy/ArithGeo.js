/*Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" 
if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If 
the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between 
each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by 
some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative 
numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

Result: 10/10
*/

function ArithGeo(arr) { 
  var type = -1;
  var dif1, dif2, geo1, geo2;
  for (i=0; i<arr.length-2; i++){
  	dif1=arr[i+1]-arr[i];
    dif2=arr[i+2]-arr[i+1];
    if (dif1!=dif2){
        type = "Geometric";
    	geo1 = arr[i+1]/arr[i];
        geo2 =arr[i+2]/arr[i+1];
        if (geo1!=geo2)
          return -1;
    }
    else {
    	type = "Arithmetic";  
    }
  }
  
  return type;
         
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeo(readline());          