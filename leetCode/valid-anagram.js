/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const freqCntOfFirst = {};
    const freqCntOfSecond = {};

    for (const val of s) {
        freqCntOfFirst[val] = (freqCntOfFirst[val] || 0) + 1;
    }
    for (const val of t) {
        freqCntOfSecond[val] = (freqCntOfSecond[val] || 0) + 1;
    }

    for (const key in freqCntOfFirst) {
        if (freqCntOfFirst[key] !== freqCntOfSecond[key]) return false;
    }

    return true;
};
