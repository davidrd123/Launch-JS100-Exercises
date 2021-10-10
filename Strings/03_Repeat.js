const repeat = (num, s) => {
  let result = '';
  while (num > 0) {
    result += s;
    num -= 1;
  }
  return result;
}

console.log(repeat(3, 'ha'));