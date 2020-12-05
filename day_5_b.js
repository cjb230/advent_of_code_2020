fs = require('fs')

function seatID (boardingPass) {
    const rowDescription = boardingPass.substr(0, 7)
    const columnDescription = boardingPass.substr(7, 4)

    let rowNumber = 0
    let positionMultiplier = 2 ** 6
    for (let r in rowDescription) {
        if (rowDescription[r] == 'B') {
            rowNumber += positionMultiplier
        }
        positionMultiplier /= 2
    }
    let columnNumber = 0
    positionMultiplier = 2 ** 2
    for (let c in columnDescription) {
        if (columnDescription[c] == 'R') {
            columnNumber += positionMultiplier
        }
        positionMultiplier /= 2
    }
    return (rowNumber * 8) + columnNumber
}


fs.readFile('day_5_input', 'utf8', function(err,data) {
    let inputArray = data.toString().split("\n")
    let availableSeatArray = Array.from(Array(1024).keys())
    for (i = 0; i < inputArray.length; i++) {
        delete availableSeatArray[seatID(inputArray[i])]
    }
    for (i = 1; i < 1023; i++) {
        if (availableSeatArray[i - 1] === undefined && availableSeatArray[i + 1] === undefined &&
            availableSeatArray[i]) {
            console.log(i)
            break
        }
    }
})