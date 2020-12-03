// https://adventofcode.com/2020/day/3
fs = require('fs')
fs.readFile('day_3_input', 'utf8', function(err,data) {
    if (err) {
        return console.log(err);
    }

    let inputArray = data.toString().split("\n")
    let inputArrayLength = inputArray.length
    let inputArrayLineWidth = inputArray[0].length

    let rightCounter = 0
    let rightPosition = 0
    let treeCount = 0
    for (i = 1; i < inputArrayLength - 1; i++) {
        rightCounter += 3
        rightPosition = rightCounter % inputArrayLineWidth
        if (inputArray[i][rightPosition] == '#') {treeCount++}
    }
    console.log(treeCount)
})
