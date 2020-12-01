fs = require('fs')
fs.readFile('day_1_input', 'utf8', function(err,data) {
    if (err) {
        return console.log(err);
    }
    var inputArray = data.toString().split("\n")
    var inputArrayLength = inputArray.length
//    console.log(inputArrayLength)
    for (i = 0; i < inputArrayLength - 2; i++) {
        for (j = i+1; j < inputArrayLength - 1; j++) {
            for (k = j+1; k < inputArrayLength; k++) {
                if (parseInt(inputArray[i], 10) + parseInt(inputArray[j], 10) + parseInt(inputArray[k], 10) == 2020) {
                    console.log(parseInt(inputArray[i], 10))
                    console.log(parseInt(inputArray[j], 10))
                    console.log(parseInt(inputArray[k], 10))
                    console.log(parseInt(inputArray[i], 10) * parseInt(inputArray[j], 10) * parseInt(inputArray[k], 10))
                }
            }
        }
    }
})
