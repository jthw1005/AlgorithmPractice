const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [numOfSite, _] = n.split(' ');
const pairs = input.slice(0, +numOfSite);
const sites = input.slice(+numOfSite);
const obj = {};
pairs.map((site) => site.split(' ')).forEach((site) => (obj[site[0]] = site[1]));

const answer = [];
sites.forEach((site) => {
  answer.push(obj[site]);
});

console.log(answer.join('\n'));
