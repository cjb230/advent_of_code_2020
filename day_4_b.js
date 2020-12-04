const { exit } = require('process')

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
    // byr
    if (isValid) {
        byr = parseInt(fields["byr"])
        if (byr > 2002 || byr < 1920) {
            isValid = false
        }
    }
    // iyr
    if (isValid) {
        let iyr = parseInt(fields["iyr"])
        if (iyr > 2020 || iyr < 2010) {
            isValid = false
        }
    }
    // eyr
    if (isValid) {
        let eyr = parseInt(fields["eyr"])
        if (eyr > 2030 || eyr < 2020) {
            isValid = false
        }
    }
    // hgt
    if (isValid) {
        let units = fields["hgt"].substr(fields["hgt"].length - 2)
        if (units != "cm" && units != "in") {
            isValid = false
        }
        if (isValid) {
            let hgtMeasure = fields["hgt"].substr(0, fields["hgt"].length - 2)
            if (units == "cm") {
                if (hgtMeasure < 150 || hgtMeasure > 193) {
                    isValid = false
                }
            } else if (units == "in") {
                if (hgtMeasure < 59 || hgtMeasure > 76) {
                    isValid = false
                }
            } else {
                console.log(units)
                exit()
            }
        }
    }    
    // hcl
    if (isValid) {
        let hcl = fields["hcl"]
        if (hcl.length === 7 && hcl[0] == "#") {
            for (i = 1; i < 7; i++) {
                if (!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"].includes(hcl[i])) {
                    isValid = false
                    break
                }
            } 
        } else {
            isValid = false
        }
    }
    // ecl
    if (isValid) {
        let ecl = fields["ecl"]
        if (!["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(ecl)) {
            isValid = false
        }
    }
    // pid
    if (isValid) {
        let pid = fields["pid"]
        if (pid.length === 9) {
            for (i = 1; i < 9; i++) {
                if (!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(pid[i])) {
                    isValid = false
                    break
                }
            } 
        } else {
            isValid = false
        }
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
