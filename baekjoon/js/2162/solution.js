const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim();

const lines = input.split('\n');
const n = +lines[0];
const segments = lines.slice(1).map((line) => line.split(' ').map(Number));

// getParent: 재귀함수를 이용하여 x의 부모 노드를 찾는다.
const getParent = (parent, x) => {
  if (parent[x] === x) return x;
  return (parent[x] = getParent(parent, parent[x]));
};

// unionParent: x와 y를 합친다. 이 때, 둘 중 더 작은 부모 노드로 합친다.
const unionParent = (parent, x, y) => {
  const parentOfX = getParent(parent, x);
  const parentOfY = getParent(parent, y);
  if (parentOfX < parentOfY) {
    parent.forEach((el, idx, arr) => {
      if (el === parentOfY) {
        arr[idx] = parentOfX;
      }
    });
  } else {
    parent.forEach((el, idx, arr) => {
      if (el === parentOfX) {
        arr[idx] = parentOfY;
      }
    });
  }
  return;
};

// compareParent: x와 y의 부모 노드가 같은지 확인한다.
const compareParent = (parent, x, y) => {
  const parentOfX = getParent(parent, x);
  const parentOfY = getParent(parent, y);
  if (parentOfX === parentOfY) return true;
  else return false;
};

// onSegment: 세 점 중 두 점 사이에 다른 점이 있는지 확인한다.
const onSegment = (p, q, r) => {
  if (
    q[0] <= Math.max(p[0], r[0]) &&
    q[0] >= Math.min(p[0], r[0]) &&
    q[1] <= Math.max(p[1], r[1]) &&
    q[1] >= Math.min(p[1], r[1])
  ) {
    return true;
  }
  return false;
};

// orientation: 세 점의 방향을 확인한다.
const orientation = (p, q, r) => {
  const val = (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
  if (val === 0) return 0;
  return val > 0 ? 1 : 2;
};

// isIntersect: 두 선분이 겹치는지 확인한다.
const isIntersect = ([x1, y1, x2, y2], [x3, y3, x4, y4]) => {
  const p1 = [x1, y1],
    q1 = [x2, y2],
    p2 = [x3, y3],
    q2 = [x4, y4];

  const o1 = orientation(p1, q1, p2);
  const o2 = orientation(p1, q1, q2);
  const o3 = orientation(p2, q2, p1);
  const o4 = orientation(p2, q2, q1);

  if (o1 !== o2 && o3 !== o4) {
    return true;
  }

  if (o1 === 0 && onSegment(p1, p2, q1)) return true;
  if (o2 === 0 && onSegment(p1, q2, q1)) return true;
  if (o3 === 0 && onSegment(p2, p1, q2)) return true;
  if (o4 === 0 && onSegment(p2, q1, q2)) return true;

  return false;
};

// 노드의 개수가 n개라고 가정, 자기 자신을 부모 노드로 존재하는 배열 생성
const parent = Array.from({ length: n }, (_, i) => i);

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    // i와 j의 부모가 같은지 확인
    if (!compareParent(parent, i, j)) {
      // 선분이 겹치는지 확인
      if (isIntersect(segments[i], segments[j])) {
        // 겹치면 부모 합치기
        unionParent(parent, i, j);
      }
    }
  }
}

const cntObj = {};
for (let i = 0; i < parent.length; i++) {
  cntObj[parent[i]] = cntObj[parent[i]] || 0;
  cntObj[parent[i]]++;
}

const numOfSet = Object.values(cntObj).length;
const maxCnt = Math.max(...Object.values(cntObj));

console.log(numOfSet + '\n' + maxCnt);
