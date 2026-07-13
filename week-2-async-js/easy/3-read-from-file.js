const fs = require("fs")
function callback(){
    const content =  fs.readFileSync("./week-2-async-js/easy/3-read-from-file.md","utf-8")
    console.log(content);
}
// setTimeout(callback,3000)

setTimeout(callback, 3000);

// Expensive synchronous operation
let sum = 0;
for (let i = 0; i < 10_000_000_000; i++) {
  sum += i;
}
console.log("Expensive operation done");