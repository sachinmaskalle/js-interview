let inputArray = ['',null,65,undefined,20,40,50,60,45,32,90];

function secondLargest(array) {
	var first = 0;
  var second = 0;
  
  for(let i=0; i<array.length; i++) {
  
  	if(array[i] > first) {
            second = first;
            first = array[i];
     } else if(array[i] > first && array[i] < second) {
     			second = array[i];
     }
  }
  
  return second;
}

console.log(secondLargest(inputArray));