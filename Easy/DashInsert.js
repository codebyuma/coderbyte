/*Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. 
For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. 
Result: 6/10 (took too long)
*/

function DashInsert(str) { 
  var final = [];
  var currentTemp;
  var prevTemp;
  
  while (str/10 !=0 ){
      currentTemp = str % 10;
      if (currentTemp%2!=0 && prevTemp%2!=0){
          if (currentTemp!=0 && prevTemp!=0){
             final.unshift("-");
             final.unshift (currentTemp);
          }
          else 
            final.unshift (currentTemp);
      }
      else{
        final.unshift (currentTemp);
      }
      str = Math.floor(str / 10);
      prevTemp = currentTemp;
  }
  if (final[final.length-1]=="-")
    final.pop();
  return (final.join(""));      
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());      