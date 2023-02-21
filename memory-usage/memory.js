const arr = [...Array(10000)];
arr.reverse();

const fillRandom = (arr) => arr.map(() => Math.random())


const filled = fillRandom(arr)

const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}
