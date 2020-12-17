// https://adventofcode.com/2020/day/13
const executionStartTime = process.hrtime()
fs = require('fs')
const fileData = fs.readFileSync('day_13_input', 'utf8')

const inputArray = fileData.toString().split("\n")

const busList = inputArray[1].split(",")
var minutesPastCounter = 0
var busesTime = [];
for (const entry of busList) {
    if (entry != 'x') {
        thisBus = parseInt(entry)
        minMinutesPast = minutesPastCounter % thisBus
        busesTime.push([thisBus, minMinutesPast])
    
    }
    minutesPastCounter++
}

// we know that the first bus has a residual time of zero.
stride = busesTime[0][0]
busesTime.shift() // won't need first element
thisTime = 0
while (busesTime.length > 0) {
    thisBus = busesTime.shift()
    busInterval = thisBus[0]
    busTargetRemainder = thisBus[1]

    //console.log(busInterval)
    //console.log(busTargetRemainder)
    while ((thisTime + busTargetRemainder) % busInterval != 0) {
        thisTime += stride
    }
    stride *= busInterval
    //console.log (thisTime)
    //console.log (stride)
}
console.log (thisTime)
//console.log("stride = ", stride)
//console.log(busesTime)