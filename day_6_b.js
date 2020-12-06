// https://adventofcode.com/2020/day/6
const startTime = process.hrtime()
fs = require('fs')

function groupSum(groupData) {
    const lines = groupData.split("\n")
    var sharedAnswers = new Set()
    for (let i = 0; i < lines.length; i++) {
        if (i - 1 >= 0) {
            const lineSet = new Set(lines[i])
            /*console.log('** merge **')
            console.log(lineSet)
            console.log(sharedAnswers)
            console.log('** End merge **')*/
            sharedAnswers = new Set([...sharedAnswers].filter(x => lineSet.has(x)))
        } else {
            sharedAnswers = new Set(lines[0])
        }
    }
    /*console.log('====')
    console.log(groupData)
    console.log(sharedAnswers)
    console.log(sharedAnswers.size)*/
    questionCount = sharedAnswers.size
    return questionCount
}

function parseGroups(rawData) {
    return rawData.toString().split("\n\n")
}

var fileData = fs.readFileSync('day_6_input', 'utf8')
const parseAndReadTime = process.hrtime()

const parsedGroups = parseGroups(fileData)
var countSum = 0
for (let i = 0; i < parsedGroups.length; i++) {
    /*console.log('\n*************')
    console.log('Group = ', i+1)
    console.log('Data length = ', parsedGroups[i].length)
    console.log('Data:\n===\n', parsedGroups[i], '\n===')*/
    individualGroupSum = groupSum(parsedGroups[i])
    countSum += individualGroupSum
    /*console.log('Group sum = ', individualGroupSum)
    console.log('Running total = ', countSum)*/

//    if (i === 7){
//        break;
//    }
}
console.log(countSum)

const endTime = process.hrtime()
const totalMSElapsed = (1000 * (endTime[0] - startTime[0])) + (endTime[1] - startTime[1]) / 1000000
const readParseMSElapsed = (1000 * (parseAndReadTime[0] - startTime[0])) + (parseAndReadTime[1] - startTime[1]) / 1000000
const algoMSElapsed = (1000 * (endTime[0] - parseAndReadTime[0])) + (endTime[1] - parseAndReadTime[1]) / 1000000
console.log('Total ms elapsed = ' + totalMSElapsed)
console.log('Read and parse, ms elapsed = ' + readParseMSElapsed)
console.log('Algo execution, ms elapsed = ' + algoMSElapsed)
