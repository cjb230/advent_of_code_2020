// https://adventofcode.com/2020/day/13
const executionStartTime = process.hrtime()
fs = require('fs')
const fileData = fs.readFileSync('day_13_input', 'utf8')

const inputArray = fileData.toString().split("\n")
const waitStartTime = parseInt(inputArray[0])

const busList = inputArray[1].split(",")
var timeToBeat = Number.POSITIVE_INFINITY
var bestBusID = 0
for (const entry of busList) {
    if (entry != 'x') {
        let busInterval = parseInt(entry)
        let firstBus = busInterval * Math.ceil(waitStartTime / busInterval)

        if (firstBus < timeToBeat) {
            timeToBeat = firstBus
            bestBusID = busInterval
        }

    }
}

console.log(bestBusID * (timeToBeat - waitStartTime))
