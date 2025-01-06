const symbol: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const change_number = (num: string) => {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    const current = symbol[num[i]];
    const next = symbol[num[i + 1]];

    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
};

let number = change_number("LVIII");

console.log(number);
