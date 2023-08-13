function isPalindrome(x) {
  if (x < 0) return false;
  if (x < 10) return true;

  let summed = 0;
  let temp_x = x;

  while (temp_x != 0) {
    let modded = Math.floor(temp_x % 10);
    temp_x = Math.floor(temp_x / 10);

    // if (modded == 0) {
    //   return summed == x;
    // }
    summed = summed * 10 + modded;
  }

  if (summed == x) return true;
  return false;
}

const res = isPalindrome(100);
console.log(res);
