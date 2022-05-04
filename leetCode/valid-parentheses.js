/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const bracketPairObj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const resultStack = [];

  for (let i = 0; i < s.length; i++) {
    if (bracketPairObj.hasOwnProperty(s[i])) {
      resultStack.push(s[i]);
    } else if (getKeyFromValue(bracketPairObj, s[i]) === resultStack[resultStack.length - 1]) {
      resultStack.pop();
    } else {
      return false;
    }
  }

  return resultStack.length ? false : true;
};

function getKeyFromValue(object, value) {
  const result = Object.keys(object).find((el) => object[el] === value);
  return result;
}

/*
문자 한 개씩 조건 확인하기

오픈 브래켓이면 그냥 스택에 추가

클로즈 브래켓이면 스택 최상단과 비교 후 맞으면 제거 다르면 false
*/
