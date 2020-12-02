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
    //for (i = 0; i < 6; i++) {
    for (i = 0; i < inputArrayLength - 1; i++) {
        var dash_loc = inputArray[i].indexOf("-")
        var space_loc = inputArray[i].indexOf(" ")
        var colon_loc = inputArray[i].indexOf(":")
        var position_a = parseInt(inputArray[i].substring(0,dash_loc))
        var position_b = parseInt(inputArray[i].substring(dash_loc+1,space_loc))
        var given_char = inputArray[i].substring(space_loc+1, space_loc+2)
        var password = inputArray[i].substring(colon_loc+2)
        var actual_occurrences = 0

        /*
        console.log(inputArray[i])
        console.log(min_occurrences)
        console.log(max_occurrences)
        console.log(counted_char)
        console.log(password)
        console.log("")
        
        console.log(password)
        console.log(password[position_a-1])
        console.log(password[position_b-1])
        console.log("")
        
        console.log(inputArray[i])
        console.log(actual_occurrences)
        */
        if (password[position_a-1] == given_char) {actual_occurrences++}
        if (password[position_b-1] == given_char) {actual_occurrences++}
        if (actual_occurrences == 1) {
            rows_passing++
        }else{
            rows_failing++
        }
    }
    console.log("Passing = " + rows_passing)
    console.log("Failing = " + rows_failing)
})
