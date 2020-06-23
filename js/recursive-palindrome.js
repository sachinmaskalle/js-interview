const DEFAULT_STR_LEN = 1;

function isPalindrome(string) {
	
	let strLen = string.length;
	let firstLetter = string[0];
	let lastLetter = string[strLen - 1];
	
	if(string.length <= DEFAULT_STR_LEN) return true;
	
	if(firstLetter === lastLetter) {
		return isPalindrome( string.slice(DEFAULT_STR_LEN, strLen - 1) );
	} else {
		return false;
	}	
}