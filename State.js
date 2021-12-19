// const validator = require("validator");

const chalk = require("chalk");
const getNotes = require("./Data.js");

const msg = getNotes();
console.log(msg);
// console.log(validator.isEmail("user@gail.com"));   mail  Validation

// console.log(validator.isURL("ww.google.com"));
// URL validation

console.log(chalk.blue("sucess !!"));
