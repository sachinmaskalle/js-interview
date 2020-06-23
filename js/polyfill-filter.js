const result = [1,2,3,4,5].filter((item,index,array) => item !== 2);
// result [1,3,4,5]

// polyfill for custom filter method
Array.prototype.myFilter = function(fn) {
	let filterdArr = [];
	
	// console.log(this) ==> current array 
	for( let i = 0; i < this.length; i++) {
		if(fn(this[i], i, this)) {
			filterdArr.push(this[i]);
		}
	}
	return filterdArr;
} 