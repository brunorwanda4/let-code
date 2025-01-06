function twoSum(nums: number[], target: number): number[] {
  const sum_numbers: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    for (let j = 0; j < nums.length; j++) {
      const num2 = nums[j];
      if (i === j) {
        continue
      }
      const sum = num1 + num2;
      if (sum === target) {
        sum_numbers.push(i);
        sum_numbers.push(j);
        return sum_numbers;
      }
    }
  }
  return sum_numbers;
}

const nums = [3,2,4];
const target = 6;

console.log(twoSum(nums, target));
