/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(0);

  let leftSum = 0;
  let rightSum = 0;

  // Calculate rightSum array and initialize answer
  for (let i = n - 1; i >= 0; i--) {
    answer[i] = Math.abs(leftSum - rightSum);
    rightSum += nums[i];
  }
    
  // Update leftSum and answer
  for (let i = 0; i < n; i++) {
    answer[i] =  Math.abs(leftSum - answer[i]);
    leftSum += nums[i];
  }


  return answer;
};