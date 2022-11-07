/**
 * 캐시
 * https://school.programmers.co.kr/learn/courses/30/lessons/17680
 */

function solution(cacheSize, cities) {
  const CACHE_HIT = 1;
  const CACHE_MISS = 5;

  const cache = [];
  let totalTime = 0;
  cities.forEach((city, idx) => {
    cities[idx] = city.toUpperCase();
  });

  for (let i = 0; i < cities.length; i++) {
    let cacheIdx = -1;
    cache.forEach((el, idx) => {
      if (el[0] === cities[i]) cacheIdx = idx;
    });
    if (cacheIdx >= 0) {
      totalTime = totalTime + CACHE_HIT;
      // 시간 갱신
      cache[cacheIdx][1] = i;
      // sort
      cache.sort((next, prev) => next[1] - prev[1]);
    } else {
      totalTime = totalTime + CACHE_MISS;
      if (cache.length < cacheSize) {
        // 그냥 push
        cache.push([cities[i], i]);
      } else if (cacheSize !== 0) {
        // shift and push
        cache.shift();
        cache.push([cities[i], i]);
      }
    }
  }
  return totalTime;
}
