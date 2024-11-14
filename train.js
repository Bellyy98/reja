console.log("train task ishga tushdi");

const moment = require("moment")
const time = moment().format()
console.log(time) 


const cpuInstances = require("os").cpus();
console.log(cpuInstances.length)