// fs.writeFileSync( file, data, options )
// writing data to a file (either exist or not)
// const fs = require("fs");
// fs.writeFileSync("notes.txt", "this is node World !!");

// fs.appendFileSync("notes.txt", "this is a code");
// to add over the same file

const name = require("./Data.js");

// const add = name(3, -4);  adding

const msg = name();
console.log(msg);
