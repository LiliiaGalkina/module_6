const obj = {
  some: "some",
  dom: "text",
  arr: [1, 2, 3, 4, 5],
  tom: "there",
};
const arr = [];

for (let key in obj) {
  if (Array.isArray(obj[key])) {
    arr.push(...obj[key]);
  } else {
    arr.push(key);
  }
}

console.log(arr);
