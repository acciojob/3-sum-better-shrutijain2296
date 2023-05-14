function threeSum(arr, target) {
// write your code here
	let sum = 0;
	let ans = 0;
	for(let i = 0; i < arr.length-2; i++){
		for(let j = 0; j < arr.length-1; j++){
			for(let k = 0; k < arr.length; k++){
				sum = arr[i] + arr[j] + arr[k];
				if(sum >= target){
					ans = Math.min(sum, ans);
				}
			}
		}
	
	}
	return ans;
}


module.exports = threeSum;
