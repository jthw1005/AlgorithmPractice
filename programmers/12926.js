/**
 * 시저 암호
 * https://school.programmers.co.kr/learn/courses/30/lessons/12926
 */

function solution(s, n) {
  return s
    .split('')
    .map((el, idx) => {
      const asciiCode = s.charCodeAt(idx);
      if (asciiCode !== 32) {
        let newAsciiCode = asciiCode + n;
        if (asciiCode <= 90 && newAsciiCode > 90) newAsciiCode -= 26;
        if (asciiCode >= 97 && newAsciiCode > 122) newAsciiCode -= 26;
        return String.fromCharCode(newAsciiCode);
      }
      return el;
    })
    .join('');
}
