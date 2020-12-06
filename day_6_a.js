// https://adventofcode.com/2020/day/6

const startTime = process.hrtime()
fs = require('fs')

function groupSum(groupData) {
    let questionCount = 0
    let uniqueChars = new Set(groupData)
    uniqueChars.delete('\n')
    questionCount = uniqueChars.size

    //console.log()
    //console.log(groupData)
    //console.log('====')
    //console.log(uniqueChars)
    // console.log(questionCount)

    return questionCount
}

function parseGroups(rawData) {
    return rawData.toString().split("\n\n")
}

var fileData = fs.readFileSync('day_6_input', 'utf8')
const parseAndReadTime = process.hrtime()

const parsedGroups = parseGroups(fileData)
var countSum = 0
for (i = 0; i < parsedGroups.length; i++) {
    countSum += groupSum(parsedGroups[i])
}
console.log(countSum)

const endTime = process.hrtime()
const totalMSElapsed = (1000 * (endTime[0] - startTime[0])) + (endTime[1] - startTime[1]) / 1000000
const readParseMSElapsed = (1000 * (parseAndReadTime[0] - startTime[0])) + (parseAndReadTime[1] - startTime[1]) / 1000000
const algoMSElapsed = (1000 * (endTime[0] - parseAndReadTime[0])) + (endTime[1] - parseAndReadTime[1]) / 1000000
console.log('Total ms elapsed = ' + totalMSElapsed)
console.log('Read and parse, ms elapsed = ' + readParseMSElapsed)
console.log('Algo execution, ms elapsed = ' + algoMSElapsed)
