function twoSum(nums: number[], target: number): number[] {
  const sum_numbers: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      if (nums[i] + nums[j] === target) {
        sum_numbers.push(i);
        sum_numbers.push(j);
        return sum_numbers;
      }
    }
  }
  return sum_numbers;
}

const nums = [3, 2, 4];
const target = 6;

console.log(twoSum(nums, target));
