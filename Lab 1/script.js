let nums = [7, 23, 35, 67, 145, 269];
 
let totalSum = 0;
for(var i in nums) {
    totalSum += nums[i];
}

console.log('The total sum = ' + totalSum);
 
let totalNums = nums.length;

let average = totalSum / totalNums;
 
console.log('The total average = ' + average);

