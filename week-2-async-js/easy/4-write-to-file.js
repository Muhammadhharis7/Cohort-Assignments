const fs = require("fs")

function callback(){
    fs.writeFileSync("./week-2-async-js/easy/4-write-to-file.md","Hello how are  you","utf-8")
}

setTimeout(callback,1000)