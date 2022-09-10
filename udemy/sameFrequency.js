function sameFrequency(a, b) {
  const obj = {};

  while (a > 0) {
    const temp = a % 10;
    obj[temp] = obj[temp] ? obj[temp] + 1 : 1;
    a = Math.floor(a / 10);
  }

  while (b > 0) {
    const temp = b % 10;
    if (!obj[temp]) return false;
    obj[temp]--;
    b = Math.floor(b / 10);
  }

  for (let key in obj) {
    if (obj[key]) false;
    return true;
  }
}
