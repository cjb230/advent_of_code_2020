fs = require('fs')

function seatID (boardingPass) {
    rowDescription = boardingPass.substr(0, 7)
    columnDescription = boardingPass.substr(7, 4)
    console.log(boardingPass)
    /*console.log(rowDescription)
    console.log(columnDescription)*/
    let rowNumber = 0
    let positionMultiplier = 2 ** 6
    //console.log(positionMultiplier)
    for (let r in rowDescription) {
        //console.log(rowDescription[r], " ", positionMultiplier)
        if (rowDescription[r] == 'B') {
            rowNumber += positionMultiplier
        }
        positionMultiplier /= 2
    }
    //console.log()
    //console.log(rowNumber)
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
    if (err) {
        return console.log(err);
    }
    let inputArray = data.toString().split("\n")
    let highestID = 0
    for (i = 0; i < inputArray.length; i++) {
        let thisSeatID = seatID(inputArray[i])
        if (thisSeatID > highestID) {
            highestID = thisSeatID
        }
    }
    console.log(highestID)
})