// https://adventofcode.com/2020/day/3
fs = require('fs')
fs.readFile('day_3_input', 'utf8', function(err,data) {
    if (err) {
        return console.log(err);
    }

    let inputArray = data.toString().split("\n")
    let inputArrayLength = inputArray.length
    let inputArrayLineWidth = inputArray[0].length
    let runningProduct = 1
    let slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]
    for (thisSlope of slopes) {
        let rightCounter = 0
        let rightPosition = 0
        let treeCount = 0
        
        for (i = thisSlope[1]; i < inputArrayLength - 1; i+= thisSlope[1]) {
            rightCounter += thisSlope[0]
            rightPosition = rightCounter % inputArrayLineWidth
            if (inputArray[i][rightPosition] == '#') {treeCount++}
        }
        console.log(treeCount)
        runningProduct *= treeCount
    }
    console.log(runningProduct)
})
