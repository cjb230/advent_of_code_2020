// https://adventofcode.com/2020/day/14
fs = require('fs')
const fileData = fs.readFileSync('day_14_input', 'utf8')

function bitValueFromDecimal(decimalNum, binaryDigit) {
    //console.log()
    //console.log(decimalNum)
    //console.log(binaryDigit)
    //console.log(decimalNum & Math.pow(2, binaryDigit - 1))
    return decimalNum & Math.pow(2, binaryDigit - 1)
}


function maskResult(mask, maskedNumber) {
    //console.log(mask)
    //console.log(maskedNumber)
    let retVal = 0
    for (let i = 0; i < 36; i++) {
        if (mask[i] == '1') {
            retVal += Math.pow(2, 35 - i)
        } else if (mask[i] == '0') {
            continue
        } else if (mask[i] == 'X') {
            retVal += bitValueFromDecimal(maskedNumber, 36 - i)
        } else {
            console.log('Unknown mask element: ' + mask[i])
            exit()
        }
    }
    return retVal
}


function sumValues(inputRows){
    let rowType = ''
    let numberEndPos = 0
    let currentMask = ''
    let memAddress = 0
    let memValue = 0
    let memory = []
    for (let i = 0; i < inputRows.length; i++) {
        rowType = inputRows[i].substr(0, 4)
        if (rowType == 'mask'){
            //console.log('New mask = ' + inputRows[i].substr(7))
            currentMask = inputRows[i].substr(7)
        } else if (rowType == 'mem[') {
            numberEndPos = inputRows[i].substr(5).indexOf(']')
            memAddress = parseInt(inputRows[i].substr(4, numberEndPos + 1))
            memValue = parseInt(inputRows[i].substr(9 + numberEndPos))
            //console.log(inputRows[i])
            //console.log(' = ' + memValue + ' => ' + memAddress + '(mv = ' + inputRows[i].substr(9 + numberEndPos))
            memory[memAddress] = maskResult(currentMask, memValue)
        } else {
            console.log('Unknown row type ' + rowType + ' at line ' + i)
        }
    }
    //console.log()
    //console.log(currentMask)
    return memory.reduce((a,b) => a + b, 0)
}

const inputArray = fileData.toString().split("\n")
console.log(sumValues(inputArray))
