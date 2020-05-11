// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// 배열 돌면서 구현 (시간효율도가 낮음)
function solution3(nums, target) {
  let result = [];

  for (let tmpIdx = 0; tmpIdx < nums.length; tmpIdx++) {
    for (let i = tmpIdx + 1; i < nums.length; i++) {
      if (!nums[tmpIdx] < target && nums[tmpIdx < target]) {
        break;
      } else {
        if (nums[tmpIdx] + nums[i] === target) {
          result = [tmpIdx, i]
        }
      }
    }
  }
  return result

}

// 해시맵으로 구현
function solution2() {
  let map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      return [map.get(target - numbers[i]) + 1, i + 1]

    } else {
      map.set(numbers[i], i)
    }
  }
  return []
}


const numbers = [-3, 4, 3, 90];
const target = 7;
console.log(solution(numbers, target));