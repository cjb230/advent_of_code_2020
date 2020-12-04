// https://adventofcode.com/2020/day/4
fs = require('fs')

function parseFields(content) {
    let kvPairs = new Object()
    let allTokens = []
    let contentLines = content.toString().split("\n")
    let contentLinesLength = contentLines.length

    for (i = 0; i < contentLinesLength; i++) {
        let tokens = contentLines[i].split(" ")
        tokens.forEach(element => { allTokens.push(element) });
    }

    allTokens.forEach(element => {
        let components = element.split(":")
        kvPairs[components[0]] = components[1]
    })
    return kvPairs
}


function isValidPassport(content) {
    fields = parseFields(content)
    isValid = true
    if (fields["byr"] == undefined || fields["iyr"] == undefined || fields["eyr"] == undefined || fields["hgt"] == undefined ||
        fields["hcl"] == undefined || fields["ecl"] == undefined || fields["pid"] == undefined) {
        isValid = false
    }
    return isValid
}


fs.readFile('day_4_input', 'utf8', function(err,data) {
    if (err) {
        return console.log(err);
    }

    let inputArray = data.toString().split("\n\n")
    let inputArrayLength = inputArray.length
    let goodPassports = 0
    let badPassports = 0

    console.log('Found ' + inputArrayLength + ' passports.')
    for (let i = 0; i < inputArrayLength; i++) {
        if (isValidPassport(inputArray[i])) {
            goodPassports++
        } else {
            badPassports++
        }
    }

    console.log('Good passports = ' + goodPassports)
    console.log('Bad passports = ' + badPassports)
})
