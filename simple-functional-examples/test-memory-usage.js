
const EMPTY = {};
const OneTwoThree = { first: 1, rest: { first: 2, rest: { first: 3, rest: EMPTY } }
};

const slowcopy = (node) =>
  node === EMPTY
    ? EMPTY
    : { first: node.first, rest: slowcopy(node.rest)};

slowcopy(OneTwoThree)

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
