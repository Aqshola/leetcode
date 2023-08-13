function twoSum(nums, target) {
  const mapped = {};
  for (let i = 0; i < nums.length; i++) {
    const curr_num = nums[i];
    const substract_target = target - curr_num;
    const index_mapped = mapped[substract_target];
    if (index_mapped !== undefined) {
      console.log(mapped, index_mapped);
      return [index_mapped, i];
    }
    mapped[curr_num] = i;
  }
  return [-1, -1];
}

const number = [2, 7, 11, 15];

const res = twoSum(number, 9);
console.log(res);
