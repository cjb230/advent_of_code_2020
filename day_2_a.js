// https://adventofcode.com/2020/day/2
fs = require('fs')
fs.readFile('day_2_input', 'utf8', function(err,data) {
    if (err) {
        return console.log(err);
    }

    var inputArray = data.toString().split("\n")
    var inputArrayLength = inputArray.length
    var rows_passing = 0
    var rows_failing = 0
    for (i = 0; i < inputArrayLength - 1; i++) {
        var dash_loc = inputArray[i].indexOf("-")
        var space_loc = inputArray[i].indexOf(" ")
        var colon_loc = inputArray[i].indexOf(":")
        var min_occurrences = parseInt(inputArray[i].substring(0,dash_loc))
        var max_occurrences = parseInt(inputArray[i].substring(dash_loc+1,space_loc))
        var counted_char = inputArray[i].substring(space_loc+1, space_loc+2)
        var password = inputArray[i].substring(colon_loc+2)

        var actual_occurrences = 0
        for (let j of password) {
            if (j == counted_char) {actual_occurrences++}
        }
        if (actual_occurrences >= min_occurrences && actual_occurrences <= max_occurrences) {
            rows_passing++
        } else {
            rows_failing++
        }
    }
    console.log("Passing = " + rows_passing)
    console.log("Failing = " + rows_failing)
})
