/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
  let evenSum = nums[0];
  let oddSum = 0;

  for (let i = 1; i < nums.length; i++) {
    evenSum = Math.max(evenSum, nums[i] + oddSum);
    oddSum = Math.max(oddSum, evenSum - nums[i]);
  }

  return Math.max(evenSum, oddSum);
    
};