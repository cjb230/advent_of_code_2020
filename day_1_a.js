// https://adventofcode.com/2020/day/1
const startTime = process.hrtime()

fs = require('fs')
fs.readFile('day_1_input', 'utf8', function(err,data) {
    if (err) {
        return console.log(err);
    }
    var inputArray = data.toString().split("\n")
    var inputArrayLength = inputArray.length
    for (i = 0; i < inputArrayLength - 1; i++) {
        for (j = i+1; j < inputArrayLength; j++) {
            if (parseInt(inputArray[i], 10) + parseInt(inputArray[j], 10) == 2020) {
                console.log(parseInt(inputArray[i], 10))
                console.log(parseInt(inputArray[j], 10))
                console.log(parseInt(inputArray[i], 10) * parseInt(inputArray[j], 10))
            }
        }
    }
    return
})

const endTime = process.hrtime()
const ms_elapsed = (1000 * (endTime[0] - startTime[0])) + (endTime[1] - startTime[1]) / 1000000
console.log('ms elapsed = ' + ms_elapsed)
