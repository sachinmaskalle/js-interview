let sum = function (a) {

  let func = function(b) {
		if(b) return sum(a+b);
    else return a;
  }
  
 func.toString = () => a;
 
 return func;

}